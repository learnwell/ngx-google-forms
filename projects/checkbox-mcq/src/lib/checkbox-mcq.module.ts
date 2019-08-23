import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';

import { CheckboxMcqComponent } from './checkbox-mcq.component';

@NgModule({
  declarations: [CheckboxMcqComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule
  ],
  exports: [CheckboxMcqComponent]
})
export class CheckboxMcqModule { }
