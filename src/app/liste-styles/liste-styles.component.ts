import { Component, OnInit } from '@angular/core';
import { Style } from '../model/style.model'; // Changed Marque to Style
import { LunetteService } from '../services/lunette.service';

@Component({
    selector: 'app-listenutritional',
    templateUrl: './liste-styles.component.html', // Changed template name to reflect "style"
    standalone: false
})

export class ListeStylesComponent implements OnInit {  // Changed ListeMarquesComponent to ListeStylesComponent
    styles: Style[] = [];  // Changed marques to styles
    ajout: boolean = true;
    updatedStyle: Style = { idSty: 0, nomSty: '' };  // Changed updatedMarque to updatedStyle
  
    constructor(private lunetteService: LunetteService) {}
  
    ngOnInit(): void {
      this.chargerStyles();  // Changed chargerMarque to chargerStyles
    }
  
    chargerStyles(): void {  // Changed chargerMarque to chargerStyles
      this.styles = this.lunetteService.listeStyles();  // Changed listeMarques to listeStyles
    }
  
    ajouterStyle(nouveauStyle: Style): void {  // Changed ajouterMarque to ajouterStyle
      this.lunetteService.ajouterStyle(nouveauStyle);  // Changed ajouterMarque to ajouterStyle
      this.chargerStyles();  // Changed chargerMarque to chargerStyles
    }
  
    styleUpdated(nt: Style): void {  // Changed marqueUpdated to styleUpdated
      if (this.ajout) {
        this.ajouterStyle(nt);  // Changed ajouterMarque to ajouterStyle
      } else {
        const index = this.styles.findIndex(style => style.idSty === nt.idSty);  // Changed marques to styles and idMar to idSty
        if (index !== -1) {
          this.styles[index] = nt;
        }
        this.ajout = true;
      }
      this.updatedStyle = { idSty: 0, nomSty: '' };  // Changed updatedMarque to updatedStyle
    }
  
    updateSty(nt: Style): void {  // Changed updateMar to updateSty
      this.updatedStyle = { ...nt };
      this.ajout = false;
    }
}
