import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../../interface/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input() note: Note;
  @Input() id: number;
  @Output() closeEmitter: EventEmitter<number> = new EventEmitter();

  cerrar() {
    this.closeEmitter.emit(this.id);
  }
}
