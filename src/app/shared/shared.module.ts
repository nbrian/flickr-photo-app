import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginationComponent } from '../pagination/pagination.component';
import { PhotoService } from './photo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    PaginationComponent
  ],
  exports: [
    PaginationComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PhotoService]
})
export class SharedModule { }
