import { NgModule } from '@angular/core';
import { NotesRoutingModule } from './notes-routing.module';
import { CommonModule } from '@angular/common';

/// Import Components
import { NoteComponent } from './note/note.component';
import { NotesComponent } from './notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';

@NgModule({
  imports: [CommonModule, NotesRoutingModule],
  declarations: [NotesComponent, NoteComponent, CreateNoteComponent],
})
export class ModuleNotes {}
