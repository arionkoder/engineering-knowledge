import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularKnowledgeModule } from '@angularknowledge/angular-knowledge.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularKnowledgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
