import { NgModule, Optional, SkipSelf } from '@angular/core';

const MODULES: any[] = [];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  providers: [],
})
export class CoreModule {
  /**
   * Creates an instance of CoreModule.
   * @param {CoreModule} parentModule
   * @memberof CoreModule
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `CoreModule has already been loaded. Import Core modules in the AppModule only.`
      );
    }
  }
}
