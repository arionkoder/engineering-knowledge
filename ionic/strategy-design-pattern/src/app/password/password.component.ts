import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],

})
export class PasswordComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private toastController: ToastController) {}

  async changePassword() {
    // Validate password fields
    if (
      !this.currentPassword ||
      !this.newPassword ||
      !this.confirmNewPassword
    ) {
      this.presentToast('Please fill in all fields.');
      return;
    }

    if (this.newPassword !== this.confirmNewPassword) {
      this.presentToast('New password and confirm password do not match.');
      return;
    }

    // Perform password change logic here (e.g., API call, authentication service)

    // Show success message
    this.presentToast('Password changed successfully!');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
