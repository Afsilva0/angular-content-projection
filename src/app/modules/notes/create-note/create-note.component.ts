import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../../interface/note';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent {
  @Output() registarNote: EventEmitter<Note> = new EventEmitter();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isComplete: [false, []],
      adicional: ['', []],
    });
  }

  registar(): void {
    const note = this.form.value as Note;
    this.registarNote.emit(note);
  }
}
