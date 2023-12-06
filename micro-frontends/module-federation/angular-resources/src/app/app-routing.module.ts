import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'angular-knowledge',
    loadChildren: () => import('@angularknowledge/angular-knowledge.module').then(m => m.AngularKnowledgeModule)
  },
  {
    path: '',
    redirectTo:'angular-knowledge',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
