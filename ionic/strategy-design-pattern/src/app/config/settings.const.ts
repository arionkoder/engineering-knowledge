import { PasswordComponent } from '../password/password.component';

export type SettingType = 'link' | 'modal' | 'page' | 'toast';
export interface SettingModel {
  id: SettingId;
  label: string;
  type: SettingType;
}

export type SettingId = 'account' | 'password' | 'website' | 'reminder';

export const SETTINGS: SettingModel[] = [
  {
    id: 'account',
    label: 'Profile',
    type: 'page',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'modal',
  },
  {
    id: 'reminder',
    label: 'Reminder',
    type: 'toast',
  },
  {
    id: 'website',
    label: 'Website',
    type: 'link',
  },
];

export const ModalsMap: { [key: string]: any } = {
  password: PasswordComponent,
};

export const WebsitesMap: { [key: string]: any } = {
  website: 'https://www.arionkoder.com/',
};
