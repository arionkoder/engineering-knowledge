import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '1234567890',
    address: '123 Main St, City, Country',
    avatar: 'https://example.com/avatar.png',
  };
}
