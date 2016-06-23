System.register(['angular2/core', './todo.service'], function(exports_1, context_1) {
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
    var core_1, todo_service_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], TodoListComponent.prototype, "todos", void 0);
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        template: "\n    <div id=\"addTodo\" *ngIf=\"todos\">\n      <h2> My Todos ! </h2>\n      <div *ngFor=\"#todo of todos\" class=\"col-1-4\">\n        <div class=\"container\" [style.background-color]=\"todo.isCompleted ? 'green' : 'orange'\">\n          <span class=\"control1\" >\n            <input type=\"checkbox\" [(ngModel)]=\"todo.isCompleted\" />\n          </span>\n          <span class=\"control2\">\n            <h3 style=\"\">{{todo.task}}</h3>\n            <h4>{{todo.dueDate}}</h4>\n          </span>\n        </div>\n      </div>\n    </div>\n    ",
                        styles: ["\n       div.container {\n         clear: both;\n         height: 62px;\n         margin-bottom:\n         25px;padding:20px;\n          }\n\n      .control1{\n          float: left; \n          display: inline-block;\n      }\n\n      .control1 > input {\n          width:50px; height: 50px;\n      }\n      .control2{\n          float: left; \n          display: inline-block;\n          padding-left: 25px;\n      }\n\n      .control2 > h3{\n          margin:0;\n      }\n   "],
                        providers: [todo_service_1.TodoService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoListComponent);
                return TodoListComponent;
            }());
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});
//# sourceMappingURL=todoList.component.js.map