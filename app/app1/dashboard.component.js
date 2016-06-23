System.register(['../../node_modules/angular2/core.d', './../hero/hero.service.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_d_1, hero_service_ts_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_d_1_1) {
                core_d_1 = core_d_1_1;
            },
            function (hero_service_ts_1_1) {
                hero_service_ts_1 = hero_service_ts_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_heroService) {
                    this._heroService = _heroService;
                    this.Heroes = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.Heroes = heroes.slice(1, 5); });
                };
                DashboardComponent.prototype.gotoDetail = function (hero) {
                };
                DashboardComponent = __decorate([
                    core_d_1.Component({
                        selector: 'my-dashboard',
                        template: "\n    <h1>My Dashboard</h1>\n    <h3>Top Heroes</h3>\n    <div class=\"grid grid-pad\">\n    <div *ngFor=\"#hero of Heroes\" (click)=\"gotoDetail(hero)\" class=\"col-1-4\">\n    <div class=\"module hero\">\n      <h4>{{hero.name}}</h4>\n    </div>\n    </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [hero_service_ts_1.HeroService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map