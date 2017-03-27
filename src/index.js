import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {AngularSoccerScore} from 'components/home/intro.component';

@Component({
  selector: 'main'
})

@View({
  directives: [AngularSoccerScore],
  template: `
    <angular-soccer-score></angular-soccer-score>
  `
})

class Main {

}

bootstrap(Main);
