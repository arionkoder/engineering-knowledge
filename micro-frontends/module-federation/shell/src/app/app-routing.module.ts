import { WebComponentWrapper, WebComponentWrapperOptions, startsWith } from '@angular-architects/module-federation-tools';
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
    path: 'dot-net-knowledge',
    component: WebComponentWrapper,
    data: {
        remoteEntry: "http://localhost:4003/remoteEntry.js",
        remoteName: 'remoteapp2',
        exposedModule: './web-components',
        elementName: 'dot-net-resources'
    } as WebComponentWrapperOptions
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
