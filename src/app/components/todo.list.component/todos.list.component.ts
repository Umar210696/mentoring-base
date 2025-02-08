import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../../todos-api.service";
import { TodosService } from "../../todos.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";




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
    readonly todosService = inject(TodosService);

      todos: Todo[] = this.todosService.todos
      todoService: any

   
    

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (respons: any) => {
                this.todosService.setTodos(respons)
            }
        )
    }
   
    deleteTodo(id: number) {
        this.todosService.deleteTodo(id);
    }

    editeTodo(todo: any) {
        this.todosService.editeTodo(todo)
    }

    public todoCreate(formData: any) {
        this.todosService.createTodo({
            id: new Date().getTime(),
            userId: formData.todoId,
            title: formData.title,
            completed: formData.completed,
        })
    }
}