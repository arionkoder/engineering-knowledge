import { SettingAction } from '../strategies/setting-action.strategy';
import { SettingId, SettingModel, SettingType } from './settings.const';

export class Setting implements SettingModel {
  id: SettingId;
  label: string;
  type: SettingType;

  constructor(
    public config: SettingModel,
    private readonly settingAction: SettingAction
  ) {
    this.id = config.id;
    this.label = config.label;
    this.type = config.type;
  }

  executeAction() {
    this.settingAction.execute(this.id);
  }
}
