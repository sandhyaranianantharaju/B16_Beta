import { Component, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input('radioVal') radioVal: any;


  constructor(
  ) { }

  ngOnInit() { }
  systemChange(e: any) {
    this.radioVal = e.value;
  }

}
