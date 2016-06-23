System.register(['../../node_modules/angular2/core.d', './../hero/Heroes.component.ts', './../hero/hero-detail.component.ts', './dashboard.component.ts', './../hero/hero.service.ts', '../../node_modules/angular2/router.d'], function(exports_1, context_1) {
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
    var core_d_1, Heroes_component_ts_1, hero_detail_component_ts_1, dashboard_component_ts_1, hero_service_ts_1, router_d_1;
    var AppComponent;
    return {
        setters:[
            function (core_d_1_1) {
                core_d_1 = core_d_1_1;
            },
            function (Heroes_component_ts_1_1) {
                Heroes_component_ts_1 = Heroes_component_ts_1_1;
            },
            function (hero_detail_component_ts_1_1) {
                hero_detail_component_ts_1 = hero_detail_component_ts_1_1;
            },
            function (dashboard_component_ts_1_1) {
                dashboard_component_ts_1 = dashboard_component_ts_1_1;
            },
            function (hero_service_ts_1_1) {
                hero_service_ts_1 = hero_service_ts_1_1;
            },
            function (router_d_1_1) {
                router_d_1 = router_d_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    router_d_1.RouteConfig([
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: Heroes_component_ts_1.HeroesComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_ts_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_ts_1.HeroDetailComponent
                        },
                    ]),
                    core_d_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n  <nav>\n    <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n    <a [routerLink]=\"['Heroes']\">Heroes</a>\n  </nav>\n  <router-outlet></router-outlet>\n    ",
                        directives: [router_d_1.ROUTER_DIRECTIVES],
                        providers: [router_d_1.ROUTER_PROVIDERS,
                            hero_service_ts_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map