import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionDetailsComponent } from './instruction-details/instruction-details.component';

const routes: Routes = [
  {
    path: '',
    component: InstructionDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructionRoutingModule { }
