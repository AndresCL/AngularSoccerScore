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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var ScoreService = (function () {
    function ScoreService(http) {
        this.http = http;
    }
    // Getting feed
    ScoreService.prototype.getFeedContent = function (url) {
        return this.http.get(url)
            .map(this.extractFeeds)
            .catch(this.handleError);
    };
    // Extracting fields
    ScoreService.prototype.extractFeeds = function (res) {
        var feed = res.json();
        return feed || {};
    };
    ScoreService.prototype.handleError = function (error) {
        // log error
        // could be something more sofisticated
        var errorMsg = error.message || "Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!";
        console.error(errorMsg);
        // throw an application level error
        return Rx_1.Observable.throw(errorMsg);
    };
    ScoreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ScoreService);
    return ScoreService;
}());
exports.ScoreService = ScoreService;
//# sourceMappingURL=score.service.js.map