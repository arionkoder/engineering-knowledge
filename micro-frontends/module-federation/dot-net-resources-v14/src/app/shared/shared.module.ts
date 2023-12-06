import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const IMPORTED_MODULES: any[] = [CommonModule];
const EXPORTED_MODULES: any[] = [ReactiveFormsModule, FormsModule, CommonModule];
@NgModule({
  imports: [...IMPORTED_MODULES],
  exports: [...EXPORTED_MODULES],
  declarations: [],
  providers: [],
})
export class SharedModule {}
