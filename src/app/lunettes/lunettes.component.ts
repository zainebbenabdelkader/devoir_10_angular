import { Component, OnInit } from '@angular/core';
import { LunetteService } from '../services/lunette.service'; // Updated service name
import { Lunette } from '../model/lunette.model'; // Updated model name
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-lunettes', // Changed component name
  templateUrl: './lunettes.component.html', // Updated template name
  standalone: false
})
export class LunettesComponent implements OnInit { // Changed component class name
  lunettes: Lunette[]; // Changed tvs to lunettes

  constructor(private lunetteService: LunetteService, // Updated service name
              public authService: AuthService) {
    this.lunettes = lunetteService.listeLunettes(); // Updated service method
  }

  ngOnInit(): void {}

  supprimerLunette(lunette: Lunette) { // Changed method name
    let conf = confirm('Etes-vous sûr ?'); // Confirm deletion
    if (conf) {
      this.lunetteService.supprimerLunette(lunette); // Updated service call
      this.lunettes = this.lunetteService.listeLunettes(); // Refresh the list after deletion
    }
  }
}
