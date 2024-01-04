import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthModule } from './authentication/auth/auth.module';
import { InstructionModule } from './instruction/instruction.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    
    children: [
      {
          path: '',
          redirectTo: '/authentication/login',
          pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
        {
            path: 'authentication',
            loadChildren:
                () => import('./authentication/auth/auth.module').then(m => m.AuthModule)
        }
    ]
},


        {
            path: 'instruction',
            loadChildren:
                () => import('./instruction/instruction.module').then(m => m.InstructionModule)
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
