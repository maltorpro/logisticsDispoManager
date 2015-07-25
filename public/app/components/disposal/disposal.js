if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="../../../../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var Disposal = (function () {
    function Disposal(list) {
        this.list = list;
    }
    Disposal.prototype.addName = function (newname) {
        this.list.add(newname.value);
        newname.value = '';
    };
    Disposal = __decorate([
        angular2_1.Component({
            selector: 'component-2'
        }),
        angular2_1.View({
            templateUrl: './components/disposal/disposal.jade?v=<%= VERSION %>',
            directives: [angular2_1.NgFor]
        })
    ], Disposal);
    return Disposal;
})();
exports.Disposal = Disposal;
