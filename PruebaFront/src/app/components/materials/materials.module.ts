import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,

    MatSelectModule,
    MatIconModule,

    ReactiveFormsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatCardModule,
    FormsModule,
  ], exports: [

    MatSelectModule,
    MatProgressBarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule

  ]
})
export class MaterialsModule {

  constructor() {
    // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
}


 }
