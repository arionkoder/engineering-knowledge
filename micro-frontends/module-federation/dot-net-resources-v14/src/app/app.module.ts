import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { DoBootstrap } from '@angular/core';
import { KnowledgeListComponent } from '@dotnetknowledge/dot-net-knowledge/components/knowledge-list/knowledge-list.component';
import { ResourceCardComponent } from '@dotnetknowledge/dot-net-knowledge/components/resource-card/resource-card.component';
@NgModule({
  declarations: [AppComponent,  KnowledgeListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ResourceCardComponent
  ],
  providers: [],
  bootstrap: [
    // Must empty to bootstrap during the function
  ],

})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('dot-net-resources', ce);
  }

}
