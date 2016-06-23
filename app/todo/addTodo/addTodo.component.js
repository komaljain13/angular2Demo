System.register(['angular2/core', '../todo'], function(exports_1, context_1) {
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
    var core_1, todo_1;
    var AddTodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            }],
        execute: function() {
            AddTodoComponent = (function () {
                function AddTodoComponent() {
                }
                AddTodoComponent.prototype.addTodo = function () {
                    this.todos.push(this.todo);
                    console.log(this.todos);
                };
                AddTodoComponent.prototype.ngOnInit = function () {
                    this.todo = new todo_1.Todo({ task: '', dueDate: new Date(), isCompleted: false });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], AddTodoComponent.prototype, "todos", void 0);
                AddTodoComponent = __decorate([
                    core_1.Component({
                        selector: 'add-todo',
                        template: "<div class=\"container\">\n      <h2> Add Todo  </h2>\n   <div>\n   <ul>\n   <li><label>Task</label>  <input [(ngModel)]=\"todo.task\" placeholder=\"Specify your task\"/></li>\n   <li><label>Due Date</label>  <input [(ngModel)]=\"todo.dueDate\" placeholder=\"Specify your DueDate\"/></li>\n   <li><label>isCompleted</label>  <input type=\"checkbox\" [(ngModel)]=\"todo.isCompleted\" /></li>\n   <li><label></label><button (click)=\"addTodo()\">Add</button></li>\n   </ul>\n   </div>\n    </div>\n    ",
                        styles: ["\n       .container{\n           padding-left:25px;\n       }\n      ul {list-style:none; margin:0; padding:0;background-color: #ddd;padding: 25px; }\n      ul > li { margin-bottom: 25px; }\n      ul > li > label {width: 150px; display:inline-block}\n   "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AddTodoComponent);
                return AddTodoComponent;
            }());
            exports_1("AddTodoComponent", AddTodoComponent);
        }
    }
});
//# sourceMappingURL=addTodo.component.js.map