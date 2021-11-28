import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  // title="'angular-material-theming-demo";
  // theme ='DeepPurple-light-theme';
  @Input('radioVal') radioVal: any;
  //radioVal = 1;
  constructor() { }

  ngOnInit(): void {
  }
  systemChange(e: any) {
    this.radioVal = e.value;
  }

}
