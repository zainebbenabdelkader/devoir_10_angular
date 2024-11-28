import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LunetteService } from '../services/lunette.service';
import { Lunette } from '../model/lunette.model';
import { Style } from '../model/style.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email-validator';

@Component({
    selector: 'app-add-lunette',
    templateUrl: './add-lunette.component.html',
    standalone: false
})
export class AddLunetteComponent implements OnInit {
  styles!: Style[];
  addLunetteForm!: FormGroup;

  constructor(
    private router: Router,
    private lunetteService: LunetteService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.styles = this.lunetteService.listeStyles();

    this.addLunetteForm = this.fb.group({
      IdLunette: ['', [Validators.required, Validators.minLength(1)]],
      nomLunette: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, emailValidator()]],
      prixLunette: ['', [Validators.required]],
      dateCreation: ['', [Validators.required]],
      idSty: ['', [Validators.required]]
    });
  }

  addLunette() {
    if (this.addLunetteForm.invalid) {
      return;
    }

    const newLunette = new Lunette(); 
    newLunette.nomLunette = this.addLunetteForm.get('nomLunette')?.value; 
    newLunette.email = this.addLunetteForm.get('email')?.value;
    newLunette.prixLunette = this.addLunetteForm.get('prixLunette')?.value;
    newLunette.dateCreation = this.addLunetteForm.get('dateCreation')?.value;
    newLunette.style = this.lunetteService.consulterStyle(this.addLunetteForm.get('idSty')?.value); 
    
    this.lunetteService.ajouterLunette(newLunette); 
    this.router.navigate(['lunettes']); 
  }
}
