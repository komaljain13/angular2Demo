System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(todoData) {
                    this.task = '';
                    this.dueDate = new Date();
                    this.isCompleted = false;
                    this.task = todoData.task;
                    this.dueDate = todoData.dueDate;
                    this.isCompleted = todoData.isCompleted;
                }
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=todo.js.map