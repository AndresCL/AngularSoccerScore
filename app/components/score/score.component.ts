import { Component, OnInit } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
    selector: 'scorecard',
    template: 
    `
        <!-- Each score result found in service -->
        <div class="score-card col-xs-6 col-sm-3" *ngFor="let score of scores">
        
        </div>
    `,
    styleUrls: ['./app/components/score/score.style.css'],
    providers: [ScoreService]
})
export class ScoreComponent implements OnInit {

    // Initializing
    private feedUrl: string = 'http://www.scorespro.com/rss2/live-soccer.xml';
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
                feed => this.scores = feed.items,
                error => console.log(error));
    }

}