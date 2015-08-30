var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../typings/_custom.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var home_1 = require('../home/home');
var about_1 = require('../about/about');
var NameList_1 = require('../../services/NameList');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewInjector: [NameList_1.NamesList]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, as: 'home' },
            { path: '/about', component: about_1.About, as: 'about' }
        ]),
        angular2_1.View({
            templateUrl: '/app.jade?v=0.0.0',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlzcG9zYWwvYXBwLnRzIl0sIm5hbWVzIjpbIkFwcCIsIkFwcC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUNBLG1EQURtRDtBQUNuRCx5QkFBeUMsbUJBQW1CLENBQUMsQ0FBQTtBQUM3RCx1QkFBdUUsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RixxQkFBbUIsY0FBYyxDQUFDLENBQUE7QUFDbEMsc0JBQW9CLGdCQUFnQixDQUFDLENBQUE7QUFDckMseUJBQXdCLHlCQUF5QixDQUFDLENBQUE7QUFFbEQ7SUFBQUE7SUFZV0MsQ0FBQ0E7SUFaWkQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFlBQVlBLEVBQUVBLENBQUNBLG9CQUFTQSxDQUFDQTtTQUMxQkEsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLFdBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO1lBQzFDQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtTQUNsREEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsNEJBQTRCQTtZQUN6Q0EsVUFBVUEsRUFBRUEsQ0FBQ0EscUJBQVlBLEVBQUVBLG1CQUFVQSxDQUFDQTtTQUN2Q0EsQ0FBQ0E7O1lBQ1VBO0lBQURBLFVBQUNBO0FBQURBLENBWlgsQUFZWUEsSUFBQTtBQUdaLG9CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQWlCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvZGlzcG9zYWwvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvX2N1c3RvbS5kLnRzXCIgLz5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlck91dGxldCwgUm91dGVyTGluaywgcm91dGVySW5qZWN0YWJsZXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7SG9tZX0gZnJvbSAnLi4vaG9tZS9ob21lJztcbmltcG9ydCB7QWJvdXR9IGZyb20gJy4uL2Fib3V0L2Fib3V0JztcbmltcG9ydCB7TmFtZXNMaXN0fSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9OYW1lTGlzdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHZpZXdJbmplY3RvcjogW05hbWVzTGlzdF1cbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lLCBhczogJ2hvbWUnIH0sXG4gIHsgcGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXQsIGFzOiAnYWJvdXQnIH1cbl0pXG5AVmlldyh7XG4gIHRlbXBsYXRlVXJsOiAnL2FwcC5qYWRlP3Y9PCU9IFZFUlNJT04gJT4nLFxuICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rXVxufSlcbmNsYXNzIEFwcCB7fVxuXG5cbmJvb3RzdHJhcChBcHAsIFtyb3V0ZXJJbmplY3RhYmxlc10pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9