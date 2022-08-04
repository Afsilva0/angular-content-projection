import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../../interface/note';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent implements OnInit {
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

  ngOnInit() {}

  registar(): void {
    console.log(this.form.value);
    const note = this.form.value as Note;
    this.registarNote.emit(note);
  }
}
