import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login() {
    this.accountService.login(this.model).subscribe(
      (res) => {
        console.log(res);
        this.loggedIn = true;
      },
      (error) => {
        alert('Unathorized');
      }
    );
  }

  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe(
      (user) => {
        this.loggedIn = !!user;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
