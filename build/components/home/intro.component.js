System.register("components/home/intro.component.js", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      AngularSoccerScore;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      AngularSoccerScore = function() {
        function AngularSoccerScore() {
          console.info('AngularSoccerScore Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(AngularSoccerScore, {}, {});
      }();
      $__export("AngularSoccerScore", AngularSoccerScore);
      Object.defineProperty(AngularSoccerScore, "annotations", {get: function() {
          return [new Component({selector: 'angular-soccer-score'}), new View({templateUrl: 'components/home/intro.view.html'})];
        }});
    }
  };
});
