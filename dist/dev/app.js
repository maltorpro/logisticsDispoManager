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
/// <reference path="typings/_custom.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var home_1 = require('./components/home/home');
var about_1 = require('./components/about/about');
var NameList_1 = require('./services/NameList');
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
            templateUrl: '/app.html?v=0.0.0',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFDQSw2Q0FENkM7QUFDN0MseUJBQXlDLG1CQUFtQixDQUFDLENBQUE7QUFDN0QsdUJBQXVFLGlCQUFpQixDQUFDLENBQUE7QUFFekYscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsc0JBQW9CLDBCQUEwQixDQUFDLENBQUE7QUFDL0MseUJBQXdCLHFCQUFxQixDQUFDLENBQUE7QUFFOUM7SUFBQUE7SUFZV0MsQ0FBQ0E7SUFaWkQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFlBQVlBLEVBQUVBLENBQUNBLG9CQUFTQSxDQUFDQTtTQUMxQkEsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLFdBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO1lBQzFDQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtTQUNsREEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsNEJBQTRCQTtZQUN6Q0EsVUFBVUEsRUFBRUEsQ0FBQ0EscUJBQVlBLEVBQUVBLG1CQUFVQSxDQUFDQTtTQUN2Q0EsQ0FBQ0E7O1lBQ1VBO0lBQURBLFVBQUNBO0FBQURBLENBWlgsQUFZWUEsSUFBQTtBQUdaLG9CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQWlCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL19jdXN0b20uZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmssIHJvdXRlckluamVjdGFibGVzfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge0hvbWV9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUnO1xuaW1wb3J0IHtBYm91dH0gZnJvbSAnLi9jb21wb25lbnRzL2Fib3V0L2Fib3V0JztcbmltcG9ydCB7TmFtZXNMaXN0fSBmcm9tICcuL3NlcnZpY2VzL05hbWVMaXN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwJyxcbiAgdmlld0luamVjdG9yOiBbTmFtZXNMaXN0XVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWUsIGFzOiAnaG9tZScgfSxcbiAgeyBwYXRoOiAnL2Fib3V0JywgY29tcG9uZW50OiBBYm91dCwgYXM6ICdhYm91dCcgfVxuXSlcbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcvYXBwLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG4gIGRpcmVjdGl2ZXM6IFtSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmtdXG59KVxuY2xhc3MgQXBwIHt9XG5cblxuYm9vdHN0cmFwKEFwcCwgW3JvdXRlckluamVjdGFibGVzXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=