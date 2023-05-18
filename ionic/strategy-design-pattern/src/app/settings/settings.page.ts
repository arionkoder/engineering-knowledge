import { Component, OnInit } from '@angular/core';
import {
  ModalsMap,
  SETTINGS,
  SettingModel,
  WebsitesMap,
} from '../config/settings.const';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  async onSettingClick(setting: SettingModel) {
    switch (setting.type) {
      case 'page':
        console.log('heavy http task');
        this.router.navigate(['/' + setting.id]);
        break;
      case 'modal':
        const modal = await this.modalCtrl.create({
          component: ModalsMap[setting.id],
        });
        modal.present();
        break;
      case 'link':
        window.open(WebsitesMap[setting.id], '_blank');
        break;
      case 'toast':
        const toast = this.toastCtrl.create({ message: 'This toast is ' + setting.label });
       (await toast).present();
        break;
    }
  }

  settings = SETTINGS;

  constructor(
    private router: Router,
    private readonly modalCtrl: ModalController,
    private readonly toastCtrl: ToastController
  ) {}

  ngOnInit() {}
}
