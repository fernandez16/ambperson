import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Person/add/add.component';
import { EditComponent } from './Person/edit/edit.component';
import { ListComponent } from './Person/list/list.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: '**', redirectTo: 'listar' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
