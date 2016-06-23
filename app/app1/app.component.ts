import {Component,OnInit} from '../../node_modules/angular2/core.d'
import {HeroesComponent} from './../hero/Heroes.component.ts'
import {HeroDetailComponent} from './../hero/hero-detail.component.ts'
import {DashboardComponent} from './dashboard.component.ts'
import {HeroService} from './../hero/hero.service.ts'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '../../node_modules/angular2/router.d';

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path:'/dashboard',
        name:'Dashboard',
        component:DashboardComponent,
        useAsDefault:true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
])

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS,
        HeroService]
})

export class AppComponent implements OnInit {
    title = 'Tour of Heroes';

    ngOnInit() {
    }


}