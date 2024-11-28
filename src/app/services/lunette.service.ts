import { Injectable } from '@angular/core';
import { Lunette } from '../model/lunette.model';
import { Style } from '../model/style.model';

@Injectable({
  providedIn: 'root',
})
export class LunetteService {

  lunettes: Lunette[];
  styles: { idSty: number; nomSty: string }[];

  constructor() {
    this.styles = [
      { idSty: 1, nomSty: 'Ray-Ban' },  // Updated with Lunette styles
      { idSty: 2, nomSty: 'Oakley' },
      { idSty: 3, nomSty: 'Gucci' },
      { idSty: 4, nomSty: 'Prada' },
    ];
    
    this.lunettes = [
      {
        idLunette: 1,
        nomLunette: 'Ray-Ban Aviator Lunette',  // Updated with Lunette names
        prixLunette: 250,  // Updated price for Lunettes
        dateCreation: new Date('01/04/2023'),
        style: { idSty: 1, nomSty: 'Ray-Ban' },  // Updated style names
        email: 'email1@example.com',  // Updated email format
      },
      {
        idLunette: 2,
        nomLunette: 'Oakley Holbrook Lunette',
        prixLunette: 180,
        dateCreation: new Date('12/03/2023'),
        style: { idSty: 2, nomSty: 'Oakley' },
        email: 'email3@example.com',
      },
      {
        idLunette: 3,
        nomLunette: 'Gucci GG0061S Lunette',
        prixLunette: 450,
        dateCreation: new Date('02/08/2023'),
        style: { idSty: 3, nomSty: 'Gucci' },
        email: 'email2@example.com',
      },
    ];
  }    

  // Get all lunettes
  listeLunettes(): Lunette[] {
    return this.lunettes;
  }

  // Add a new lunette
  ajouterLunette(lunette: Lunette): void {
    if (!lunette.idLunette) {
      const maxId = this.lunettes.reduce(
        (max, item) => (item.idLunette && item.idLunette > max ? item.idLunette : max),
        0
      );
      lunette.idLunette = maxId + 1;
    }

    this.lunettes.push(lunette);
  }

  // Delete a lunette
  supprimerLunette(l: Lunette): void {
    const index = this.lunettes.indexOf(l, 0);
    if (index > -1) {
      this.lunettes.splice(index, 1);
    }
  }

  // Get lunette by ID
  consulterLunette(id: number): Lunette {
    return this.lunettes.find((l) => l.idLunette === id)!;
  }

  // Update a lunette
  updateLunette(lunette: Lunette): void {
    this.supprimerLunette(lunette);
    this.ajouterLunette(lunette);
  }

  // Get all styles
  listeStyles(): Style[] {
    return this.styles;
  }

  // Get a style by ID
  consulterStyle(id: number): Style {
    return this.styles.find((sty) => sty.idSty === id)!;
  }

  // Filter lunettes by style
  rechercherParStyle(idSty: number): Lunette[] {
    return this.lunettes.filter((cur) => cur.style.idSty === idSty);
  }

  // Filter lunettes by name
  rechercherParNom(nom: string): Lunette[] {
    return this.lunettes.filter((lunette) =>
      lunette.nomLunette?.toLowerCase().includes(nom.toLowerCase())
    );
  }

  // Add a new style
  ajouterStyle(sty: Style): Style {
    const id = this.styles.length > 0
      ? Math.max(...this.styles.map((s) => s.idSty)) + 1
      : 1;

    sty.idSty = id;
    this.styles.push(sty);
    return sty;
  }
}
