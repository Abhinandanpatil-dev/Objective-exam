import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructionRoutingModule } from './instruction-routing.module';
import { InstructionDetailsComponent } from './instruction-details/instruction-details.component';


@NgModule({
  declarations: [
    InstructionDetailsComponent
  ],
  imports: [
    CommonModule,
    InstructionRoutingModule
  ]
})
export class InstructionModule { }
