System.register(['../todo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var todo_1;
    var todoList;
    return {
        setters:[
            function (todo_1_1) {
                todo_1 = todo_1_1;
            }],
        execute: function() {
            exports_1("todoList", todoList = [
                new todo_1.Todo({ task: 'go to movie', dueDate: new Date(), isCompleted: false }),
                new todo_1.Todo({ task: 'go to gym', dueDate: new Date(), isCompleted: false }),
                new todo_1.Todo({ task: 'go to park', dueDate: new Date(), isCompleted: false }),
                new todo_1.Todo({ task: 'go to mall of india', dueDate: new Date(), isCompleted: false }),
                new todo_1.Todo({ task: 'go to hill station', dueDate: new Date(), isCompleted: false })
            ]);
        }
    }
});
//# sourceMappingURL=mocked-todo.js.map