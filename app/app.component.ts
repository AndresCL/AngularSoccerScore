import { Component } from '@angular/core';

@Component({
    selector: 'angularsoccerscore',
    styles: [`

    `],
    template: `
        <a href="https://github.com/AndresCL/AngularSoccerScore">
        <img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>
        

        <div class="jumbotron">
            <h1 class="display-3">Angular Soccer Score</h1>
            <p class="lead">This is a tiny Angular2 component that loads data from a json webservice and displays the results in a fancy way.</p>
            <hr class="my-4">
            <p>{{message}}</p>
        </div>


        <scorecard></scorecard>
    `
})
export class AppComponent {
    message = 'Is the GOL!';
}