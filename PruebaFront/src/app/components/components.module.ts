import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { DataTableModule } from 'angular7-data-table';
import { TablaVisorComponent } from './table-visor/table-visor.component';
import { MaterialsModule } from './materials/materials.module';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    TablaVisorComponent,
    FormularioComponent,
  ],
  entryComponents: [
  ],
  exports: [
    TablaVisorComponent,
    MaterialsModule,
    FormularioComponent,
  ],
  imports: [
    ReactiveFormsModule,
    DataTableModule.forRoot(),
    FormsModule,
    ChartsModule,
    PipesModule,
    CommonModule,
    MaterialsModule,
  ], providers: [  ]

})
export class ComponentsModule {}
