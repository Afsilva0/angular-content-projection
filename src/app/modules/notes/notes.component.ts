import { Component } from '@angular/core';
import { Note } from '../../interface/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  notes: Note[] = [
    {
      title: 'Mi primer nota',
      description: 'Hoy estoy usando content projection en Angular',
      isComplete: false,
      adicional: 'En stackblitz',
    },
    {
      title: 'Mi segunda nota',
      description: 'No se que decir',
      isComplete: true,
      adicional: 'y menos algo adicional',
    },
    {
      title: '¿Que sera lo proximó en aprender?',
      description: 'No se. Pero sera divertido!!',
      isComplete: true,
    },
  ];
}
