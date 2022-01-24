import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './post/entry/entry.component';
import { ListComponent } from './post/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: ':id', component: EntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
