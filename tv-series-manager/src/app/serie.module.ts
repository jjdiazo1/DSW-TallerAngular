// src/app/serie.module.ts (or the name of the module where SeriesListComponent is declared)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list.component'; // Ensure this path is correct

@NgModule({
  declarations: [
    SeriesListComponent
    // ... any other components related to series
  ],
  imports: [
    CommonModule
    // ... any other modules you need
  ],
  exports: [
    SeriesListComponent // This makes SeriesListComponent available outside of SerieModule
  ]
})
export class SerieModule { }
