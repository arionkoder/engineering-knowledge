import { Component, OnInit } from '@angular/core';
import { SETTINGS, SettingModel } from '../config/settings.const';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Setting } from '../config/setting.model';
import { PageActionStrategy } from '../strategies/page-action.strategy';
import { ModalActionStrategy } from '../strategies/modal-action.strategy';
import { LinkActionStrategy } from '../strategies/link-action.strategy';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  onSettingClick = (setting: Setting) => setting.executeAction();

  settings: Setting[] = [];

  constructor(router: Router, readonly modalCtrl: ModalController) {
    this.settings = SETTINGS.map((setting) => {
      switch (setting.type) {
        case 'page':
          return new Setting(setting, new PageActionStrategy(router));
        case 'modal':
          return new Setting(setting, new ModalActionStrategy(modalCtrl));
        case 'link':
          return new Setting(setting, new LinkActionStrategy());
          break;
      }
    });
  }

}
