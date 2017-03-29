import { Component, OnInit } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
    selector: 'scorecard',
    template: 
    `
        <!-- Each score result found in service -->
        <div class="card score-card col-xs-6 col-sm-4" *ngFor="let score of scores">
            <!--<img class="card-img-top" src="http://loremflickr.com/320/240/soccer" alt="Card image cap">-->
            <div class="card-block">
                <h4 class="card-title">{{score.home_team.country}} {{score.home_team.goals}} <img src="app/assets/img/ball.png" width="10"> {{score.away_team.country}} {{score.away_team.goals}}</h4>
                <p class="card-text"><strong>Status: </strong> {{score.status}}</p>
                
                <ul class="list-group">
                    <li class="list-group-item"><strong>Location</strong> {{score.location}}</li>
                    <li class="list-group-item"><strong>Winner</strong> {{score.winner}}</li>
                    <li class="list-group-item"><strong>Date</strong> ({{score.datetime | date: 'dd/MM/yyyy'}})</li>
                </ul>
                
            </div>
        </div>


    `,
    styleUrls: ['./app/components/score/score.style.css'],
    providers: [ScoreService]
})
export class ScoreComponent implements OnInit {

    // Initializing
    private feedUrl: string = 'http://worldcup.sfg.io/matches';
    private scores: any;

    // Setting variables on constructor
    constructor(private scoreService: ScoreService) { }

    // Calling on init
    ngOnInit() {
        this.refreshFeed();
    }

    private refreshFeed() {
        this.scoreService.getFeedContent(this.feedUrl)
            .subscribe(
                feed => this.scores = feed,
                error => console.log(error));
    }

}