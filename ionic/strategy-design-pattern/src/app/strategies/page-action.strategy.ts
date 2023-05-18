import { Router } from '@angular/router';
import { SettingAction } from './setting-action.strategy';

export class PageActionStrategy implements SettingAction {
  constructor(private readonly router: Router) {}

  execute(id: string): void {
    this.router.navigate(['/' + id]);
  }
}
