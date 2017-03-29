"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var score_service_1 = require('./score.service');
var ScoreComponent = (function () {
    // Setting variables on constructor
    function ScoreComponent(scoreService) {
        this.scoreService = scoreService;
        // Initializing
        this.feedUrl = 'http://worldcup.sfg.io/matches';
    }
    // Calling on init
    ScoreComponent.prototype.ngOnInit = function () {
        this.refreshFeed();
    };
    ScoreComponent.prototype.refreshFeed = function () {
        var _this = this;
        this.scoreService.getFeedContent(this.feedUrl)
            .subscribe(function (feed) { return _this.scores = feed; }, function (error) { return console.log(error); });
    };
    ScoreComponent = __decorate([
        core_1.Component({
            selector: 'scorecard',
            template: "\n        <!-- Each score result found in service -->\n        <div class=\"card score-card col-xs-6 col-sm-4\" *ngFor=\"let score of scores\">\n            <!--<img class=\"card-img-top\" src=\"http://loremflickr.com/320/240/soccer\" alt=\"Card image cap\">-->\n            <div class=\"card-block\">\n                <h4 class=\"card-title\">{{score.home_team.country}} {{score.home_team.goals}} <img src=\"app/assets/img/ball.png\" width=\"10\"> {{score.away_team.country}} {{score.away_team.goals}}</h4>\n                <p class=\"card-text\"><strong>Status: </strong> {{score.status}}</p>\n                \n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\"><strong>Location</strong> {{score.location}}</li>\n                    <li class=\"list-group-item\"><strong>Winner</strong> {{score.winner}}</li>\n                    <li class=\"list-group-item\"><strong>Date</strong> ({{score.datetime | date: 'dd/MM/yyyy'}})</li>\n                </ul>\n                \n            </div>\n        </div>\n\n\n    ",
            styleUrls: ['./app/components/score/score.style.css'],
            providers: [score_service_1.ScoreService]
        }), 
        __metadata('design:paramtypes', [score_service_1.ScoreService])
    ], ScoreComponent);
    return ScoreComponent;
}());
exports.ScoreComponent = ScoreComponent;
//# sourceMappingURL=score.component.js.map