import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/core';

import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

const routes: Routes = [
    { path: '', component: ListComponent},
    { path: 'add', component: AddEditComponent},
    { path 'add/:id', component, AddEditComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }