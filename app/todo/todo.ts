interface TodoConstructor{
    task:string
    dueDate:Date
    isCompleted:boolean
}

export class Todo{
    task:string='';
    dueDate:Date=new Date();
    isCompleted:boolean=false;

    constructor(todoData:TodoConstructor){
        this.task=todoData.task;
        this.dueDate=todoData.dueDate;
        this.isCompleted=todoData.isCompleted;
    }
}

