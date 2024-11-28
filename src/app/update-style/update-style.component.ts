import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Style } from '../model/style.model'; // Updated model import

@Component({
  selector: 'app-update-style',  // Updated component selector
  templateUrl: './update-style.component.html',  // Updated template path
  styles: [],
  standalone: false
})
export class UpdateStyleComponent {
  @Input() style!: Style;  // Updated variable name and type
  @Input() ajout!: boolean;
  @Output() styleUpdated = new EventEmitter<Style>();  // Updated event emitter

  saveStyle() {  // Updated method name
    this.styleUpdated.emit(this.style);  // Emit the updated style
  }
}
