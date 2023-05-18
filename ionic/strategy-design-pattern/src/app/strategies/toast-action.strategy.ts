import { ToastController } from '@ionic/angular';
import { SettingAction } from './setting-action.strategy';

export class ToastActionStrategy implements SettingAction {
  constructor(private readonly toastCtrl: ToastController) {}
  async execute(id: string): Promise<void> {
    const toast = this.toastCtrl.create({
      message: 'This toast is ' + id,
    });
    (await toast).present();
  }
}
