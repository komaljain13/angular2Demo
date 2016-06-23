System.register(['angular2/core', './mockedTodo/todo.service', './mockedTodo/todoList.component', './addTodo/addTodo.component'], function(exports_1, context_1) {
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
    var core_1, todo_service_1, todoList_component_1, addTodo_component_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todoList_component_1_1) {
                todoList_component_1 = todoList_component_1_1;
            },
            function (addTodo_component_1_1) {
                addTodo_component_1 = addTodo_component_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_todoService) {
                    this._todoService = _todoService;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('initialized');
                    this._todoService.getTodos().then(function (todos) { return _this.todoList = todos; });
                };
                DashboardComponent.prototype.ngOnDestroy = function () {
                    console.log("destroyed");
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        template: "\n    <todo-list [todos]=\"todoList\" class=\"tab1\">Loading...</todo-list>\n     <add-todo [todos]=\"todoList\"  class=\"tab2\"></add-todo>\n    ",
                        styles: ["\n    .tab1{\n      width:60%; float:left;\n    }\n    .tab2{\n      width:40%; float:left;\n    }"],
                        directives: [todoList_component_1.TodoListComponent, addTodo_component_1.AddTodoComponent],
                        providers: [todo_service_1.TodoService]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map