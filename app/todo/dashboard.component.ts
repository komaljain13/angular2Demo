import {Component,OnInit,OnDestroy} from 'angular2/core'
import {TodoService} from './mockedTodo/todo.service'
import {TodoListComponent} from './mockedTodo/todoList.component'
import {AddTodoComponent} from './addTodo/addTodo.component'
import {Todo} from './todo'


@Component({
    selector: 'dashboard',
    template: `
    <todo-list [todos]="todoList" class="tab1">Loading...</todo-list>
     <add-todo [todos]="todoList"  class="tab2"></add-todo>
    `,
    styles:[`
    .tab1{
      width:60%; float:left;
    }
    .tab2{
      width:40%; float:left;
    }`],
    directives:[TodoListComponent,AddTodoComponent],
    providers:[TodoService]
    
})

export class DashboardComponent implements OnInit,OnDestroy{
    todoList:Todo[];
   
   constructor(private _todoService:TodoService){
   }
   
   ngOnInit(){
     console.log('initialized')
     this._todoService.getTodos().then(todos=> this.todoList=todos)
   }
   ngOnDestroy(){
     console.log("destroyed")
   }
}
