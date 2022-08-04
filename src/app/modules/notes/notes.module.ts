import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NotesRoutingModule } from './notes-routing.module';
import { CommonModule } from '@angular/common';

/// Import Components
import { NoteComponent } from './note/note.component';
import { NotesComponent } from './notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';

@NgModule({
  imports: [CommonModule, NotesRoutingModule, ReactiveFormsModule],
  declarations: [NotesComponent, NoteComponent, CreateNoteComponent],
})
export class ModuleNotes {}
