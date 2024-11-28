import { Component, OnInit } from '@angular/core';
import { Lunette } from '../model/lunette.model';  // Updated Tv to Lunette
import { LunetteService } from '../services/lunette.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  standalone: false
})
export class RechercheParNomComponent implements OnInit {

  allLunettes!: Lunette[];  // Updated allTvs to allLunettes
  searchTerm!: string;
  lunettes: Lunette[] = [];  // Updated tvs to lunettes

  constructor(private lunetteService: LunetteService) {}

  ngOnInit(): void {
    // Directly assign the result from the service without subscribing
    this.allLunettes = this.lunetteService.listeLunettes();  // Updated listeTvs to listeLunettes
  }

  rechercherLunettes() {  // Updated recherchertvvs to rechercherLunettes
    // Call the method directly to filter lunettes
    this.lunettes = this.lunetteService.rechercherParNom(this.searchTerm);
  }

  onKeyUp(filterText: string) {
    this.lunettes = this.allLunettes.filter(item =>
      item.nomLunette?.toLowerCase().includes(filterText.toLowerCase())  // Updated nomTv to nomLunette
    );
  }
}
