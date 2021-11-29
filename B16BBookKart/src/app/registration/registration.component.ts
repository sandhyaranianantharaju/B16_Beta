import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Input('radioVal') radioVal: any;

  constructor() { }

  ngOnInit(): void {
  }
  systemChange(e: any) {
    this.radioVal = e.value;
  }

}
