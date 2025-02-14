import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../../services/todos-api.service";

import { TodoCardComponent } from "./todo-card/todo-card.component";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";
import { Store } from "@ngrx/store";
import { TodosActions } from './store/todo.actions';
import { selectTodos } from "./store/todos.selectors";


export interface Todo {
        userId: number,
        id: number,
        title: string,
        completed: boolean,
}
   
@Component({
    selector: 'app-todos-list',
    templateUrl: './todos.list.component.html',
    styleUrl: './todos.list.component.scss',
    standalone: true,
    imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent ],
     changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {

    readonly todosApiService = inject(TodosApiService);
    private readonly store = inject(Store);
    public readonly todos$ = this.store.select(selectTodos);

      
    constructor() {
        this.todosApiService.getTodos().subscribe(
            (respons: any) => {
                this.store.dispatch(TodosActions.set({todos: respons}));
            }
        )
    }
   
    deleteTodo(id: number) {
        this.store.dispatch(TodosActions.delete({id}));
    }
    editeTodo(todo: any) { 
    }

    public todoCreate(formData: any) {
        this.store.dispatch(
            TodosActions.create({
                todo: {
                    id: new Date().getTime(),
                    userId: formData.todoId,
                    title: formData.title,
                    completed: formData.completed,
                }
            })
        );
    }
}