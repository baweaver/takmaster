import {Component, View} from 'angular2/core';

@Component({
  selector: 'takmaster'
})

@View({
  templateUrl: 'takmaster.html'
})

export class Takmaster {

  constructor() {
    console.info('Takmaster Component Mounted Successfully');
  }

}
