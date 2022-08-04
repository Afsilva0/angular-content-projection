import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ComponentNotes } from './notes.components';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  {
    path: 'notes',
    component: ComponentNotes,
  },
  {
    path: '**',
    redirectTo: 'notes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
