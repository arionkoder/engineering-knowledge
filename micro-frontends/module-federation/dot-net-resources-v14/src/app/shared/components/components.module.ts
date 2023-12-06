import { NgModule } from '@angular/core';

const COMPONENTS: any[] = [];
const MODULES: any[] = [];

@NgModule({
  imports: [...MODULES],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ComponentsModule {}
