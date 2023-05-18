import { ModalController } from '@ionic/angular';
import { ModalsMap } from '../config/settings.const';
import { SettingAction } from './setting-action.strategy';

export class ModalActionStrategy implements SettingAction {
  constructor(private readonly modalCtrl: ModalController) {}
  async execute(id: string): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalsMap[id],
    });
    modal.present();
  }
}
