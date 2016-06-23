import {Injectable} from 'angular2/core'
import {todoList} from './mocked-todo'

@Injectable()
export class TodoService{
    getTodos(){
        return Promise.resolve(todoList);
    }
}

