System.register("index.js", ["angular2/core", "angular2/platform/browser", "components/home/intro.component"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      AngularSoccerScore,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      AngularSoccerScore = $__m.AngularSoccerScore;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [AngularSoccerScore],
            template: "\n    <angular-soccer-score></angular-soccer-score>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});
