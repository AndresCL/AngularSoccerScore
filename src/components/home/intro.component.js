import {Component, View} from 'angular2/core';

@Component({
  selector: 'angular-soccer-score'
})

@View({
  templateUrl: 'components/home/intro.view.html'
})

export class AngularSoccerScore {

  constructor() {
    console.info('AngularSoccerScore Component Mounted Successfully');
  }

}
