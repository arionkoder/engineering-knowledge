import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeListComponent } from './components/knowledge-list/knowledge-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ResourceCardComponent } from './components/resource-card/resource-card.component';
@NgModule({
  declarations: [
    KnowledgeListComponent,
    ResourceCardComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      { path: '', component: KnowledgeListComponent },
    ]),
  ],
  providers: [],
  exports: [
    KnowledgeListComponent
  ]
})
export class AngularKnowledgeModule {}
