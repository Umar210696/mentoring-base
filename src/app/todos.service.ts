import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./components/todo.list.component/todos.list.component";

@Injectable({providedIn: 'root'})

export class TodosService {
    todosSubject$ = new BehaviorSubject<Todo[]>([]);
    todos: Todo[] = [];

      setTodos(todo: Todo[]) {
            this.todos = todo;
            this.todosSubject$.next(todo);
        }



  editeTodo(editedTodo: Todo) {
        this.todos = this.todos.map(
            todo => {
                if (todo.id === editedTodo.id) {
                    return editedTodo;
                } else {
                    return todo;
                }
                    
            }
        )

        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todo => {
                    if (todo.id === editedTodo.id) {
                        return editedTodo;
                    } else {
                        return todo;
                    }
                        
                }
            )
        )
    }


    
        // СОЗДАНИЕ НОВОГО ЮЗЕРА
    
        createTodo(todo: Todo) {
            // const userIsExsisteng = this.todosSubject$.value.find(
            //     (currentElement) => currentElement.email === todo.email
            // )
            this.todos = [...this.todos, todo];
            this.todosSubject$.next(
                [...this.todosSubject$.value, todo]
            )
        }


           
    // УДАЛЯЕТ ЮЗЕРА

    deleteTodo(id: number) {
        this.todos = this.todos.filter(
            item => {
                if (id === item.id) {
                    return false;
                } else {
                    return true;
                }
            }
        )

        this.todosSubject$.next(
            this.todosSubject$.value.filter(
                item => {
                    if (id === item.id) {
                        return false;
                    } else {
                        return true;
                    }
                }
            )
        )
    }

    
}


