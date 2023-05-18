import { WebsitesMap } from '../config/settings.const';
import { SettingAction } from './setting-action.strategy';

export class LinkActionStrategy implements SettingAction {
  execute(id: string): void {
    window.open(WebsitesMap[id], '_blank');
  }
}
