import { Component, OnInit } from '@angular/core';
import { LunetteService } from '../services/lunette.service'; // Update service import
import { Lunette } from '../model/lunette.model'; // Update model import
import { Style } from '../model/style.model'; // Update model import

@Component({
    selector: 'app-recherche-par-style', // Updated selector to match new name
    templateUrl: './recherche-par-style.component.html', // Updated template URL
    styleUrls: ['./recherche-par-style.component.css'],
    standalone: false
})
export class RechercheParStyleComponent implements OnInit { // Updated component name
  lunettes: Lunette[] | undefined;  // Updated to Lunette type
  styles: Style[] | undefined; // Updated to Style type
  IdStyle: any;

  constructor(private lunetteService: LunetteService) {} // Updated service

  ngOnInit(): void {
    this.styles = this.lunetteService.listeStyles(); // Update to correct service method
    this.lunettes = this.lunetteService.listeLunettes(); // Update to correct service method
  }

  onchange(): void {
    this.lunettes = this.lunetteService.rechercherParStyle(this.IdStyle); // Updated method call
  }

  supprimerLunette(l: Lunette): void { // Updated method name
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.lunetteService.supprimerLunette(l); // Updated service method
      this.onchange(); // Refresh the list after deletion
    }
  }
}
