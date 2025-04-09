import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/form';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './accounts-routing.module';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component ';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declaration: [
        ListComponent,
        AddEditComponent
    ]
})
export class AccountRoutingModule { }