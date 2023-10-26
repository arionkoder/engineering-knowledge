import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // First microfrontend
  {
    path: 'angular-knowledge',
    loadChildren: () =>
      import('remoteapp1/AngularKnowledgeModule').then(
        (m) => m.AngularKnowledgeModule
      ),
  },
  {
    path: '',
    redirectTo: 'angular-knowledge',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
