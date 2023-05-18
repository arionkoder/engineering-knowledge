import { SettingId } from '../config/settings.const';

export interface SettingAction {
  execute(id: SettingId): void;
}
