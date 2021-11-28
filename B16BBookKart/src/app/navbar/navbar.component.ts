import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  radioVal = 1;
  loginFlag: boolean = false;
  registerFlag: boolean = false;
  constructor(
  ) { }

  ngOnInit(): void {
  }
  systemChange(e: any) {
    this.radioVal = e.value;
  }
  loginPage() {
    this.loginFlag = true;
    this.registerFlag = false;
  }
  registerPage() {
    this.registerFlag = true;
    this.loginFlag = false;
  }

}