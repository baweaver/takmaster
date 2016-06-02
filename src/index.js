import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Takmaster} from 'takmaster';

@Component({
  selector: 'main'
})

@View({
  directives: [Takmaster],
  template: `
    <takmaster></takmaster>
  `
})

class Main {

}

bootstrap(Main);
