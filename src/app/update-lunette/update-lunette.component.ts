import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LunetteService } from '../services/lunette.service';
import { Lunette } from '../model/lunette.model';
import { Style } from '../model/style.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email-validator'; 

@Component({
  selector: 'app-update-lunette',
  templateUrl: './update-lunette.component.html',
  styleUrls: ['./update-lunette.component.css'],
  standalone: false
})
export class UpdateLunetteComponent implements OnInit {
  styles!: Style[];  // Renamed from marques
  updatedStyleId!: number;  // Renamed from updatedMarId
  currentLunette = new Lunette();  // Renamed from currentTv
  updateLunetteForm!: FormGroup;  // Renamed from updateTvForm

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private lunetteService: LunetteService,  // Renamed from tvService
    private fb: FormBuilder 
  ) { }

  ngOnInit() {
    this.styles = this.lunetteService.listeStyles();  // Renamed from listeMarques
    this.currentLunette = this.lunetteService.consulterLunette(this.activatedRoute.snapshot.params['id']);  // Renamed from consulterTv
    this.updatedStyleId = this.currentLunette.style.idSty;  // Renamed from marque.idMar

    this.updateLunetteForm = this.fb.group({
      email: [this.currentLunette.email, [Validators.required, emailValidator()]],
      nomLunette: [this.currentLunette.nomLunette, [Validators.required, Validators.minLength(3)]],  // Renamed from nomTv
      prixLunette: [this.currentLunette.prixLunette, [Validators.required]],  // Renamed from prixTv
      dateCreation: [this.currentLunette.dateCreation, [Validators.required]],
    });
  }

  emailInvalid(): boolean {
    const email = this.updateLunetteForm.get('email')?.value;
    return email && !(email.includes('@') && email.includes('.com'));
  }

  updateLunette() {
    if (this.updateLunetteForm.invalid) {
      return; 
    }
    this.currentLunette.style = this.lunetteService.consulterStyle(this.updatedStyleId);  // Renamed from consulterMarque
    this.currentLunette.email = this.updateLunetteForm.get('email')?.value;
    this.lunetteService.updateLunette(this.currentLunette);  // Renamed from updateTv
    this.router.navigate(['lunettes']);  // Renamed from 'tvs'
  }
}
