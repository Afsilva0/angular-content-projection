import { Component, Input } from '@angular/core';
import { Note } from '../../../interface/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input() note: Note;
}