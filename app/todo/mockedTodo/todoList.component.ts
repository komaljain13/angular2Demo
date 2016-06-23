import {Component,OnInit,OnDestroy,Input} from 'angular2/core'
import {Todo} from '../todo'
import {TodoService} from './todo.service'


@Component({
    selector: 'todo-list',
    template: `
    <div id="addTodo" *ngIf="todos">
      <h2> My Todos ! </h2>
      <div *ngFor="#todo of todos" class="col-1-4">
        <div class="container" [style.background-color]="todo.isCompleted ? 'green' : 'orange'">
          <span class="control1" >
            <input type="checkbox" [(ngModel)]="todo.isCompleted" />
          </span>
          <span class="control2">
            <h3 style="">{{todo.task}}</h3>
            <h4>{{todo.dueDate}}</h4>
          </span>
        </div>
      </div>
    </div>
    `,
    styles:[`
       div.container {
         clear: both;
         height: 62px;
         margin-bottom:
         25px;padding:20px;
          }

      .control1{
          float: left; 
          display: inline-block;
      }

      .control1 > input {
          width:50px; height: 50px;
      }
      .control2{
          float: left; 
          display: inline-block;
          padding-left: 25px;
      }

      .control2 > h3{
          margin:0;
      }
   `],
    providers:[TodoService]
})

export class TodoListComponent {
  @Input()
   todos:Todo[];
   
}