import {Component,OnInit,OnDestroy,Input} from 'angular2/core'
import {Todo} from '../todo'

@Component({
    selector: 'add-todo',
    template: `<div class="container">
      <h2> Add Todo  </h2>
   <div>
   <ul>
   <li><label>Task</label>  <input [(ngModel)]="todo.task" placeholder="Specify your task"/></li>
   <li><label>Due Date</label>  <input [(ngModel)]="todo.dueDate" placeholder="Specify your DueDate"/></li>
   <li><label>isCompleted</label>  <input type="checkbox" [(ngModel)]="todo.isCompleted" /></li>
   <li><label></label><button (click)="addTodo()">Add</button></li>
   </ul>
   </div>
    </div>
    `,
   styles:[`
       .container{
           padding-left:25px;
       }
      ul {list-style:none; margin:0; padding:0;background-color: #ddd;padding: 25px; }
      ul > li { margin-bottom: 25px; }
      ul > li > label {width: 150px; display:inline-block}
   `]
})

export class AddTodoComponent implements OnInit{
    todo:Todo;
    @Input()
    todos:Todo[]
    addTodo(){
        this.todos.push(this.todo);
        console.log(this.todos)
    }
    
    ngOnInit(){
        this.todo=new Todo({task:'',dueDate:new Date(),isCompleted:false})
    }
}
