import { NgModule } from '@angular/core';
import { NotesComponent } from './note/note.component';
import { NotesRoutingModule } from './notes-routing.module';
import { ComponentNotes } from './notes.components';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, NotesRoutingModule],
  declarations: [ComponentNotes, NotesComponent],
})
export class ModuleNotes {}
