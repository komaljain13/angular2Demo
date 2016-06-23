import {Component,OnInit} from '../../node_modules/angular2/core.d';
import {Hero} from './../hero/hero';
import {HeroService} from './../hero/hero.service.ts'

@Component({
    selector: 'my-dashboard',
    template: `
    <h1>My Dashboard</h1>
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
    <div *ngFor="#hero of Heroes" (click)="gotoDetail(hero)" class="col-1-4">
    <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
    </div>
</div>
    `
})

export class DashboardComponent implements OnInit {
    Heroes:Hero[] = [];

    constructor(private _heroService:HeroService) {
    }

    ngOnInit() {
        this._heroService.getHeroes().then(heroes=> this.Heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero){

    }

}