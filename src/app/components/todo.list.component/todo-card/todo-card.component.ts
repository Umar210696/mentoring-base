import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { MatDialog,} from '@angular/material/dialog';
import { EditTodoDialogComponent } from "../edit-todo-dialog/edit-todo-dialog.component";
import { CustomUpperCasePipe } from "../../pipes/uper-case.pipe";
import { LimitationString } from "../../pipes/limitation-string.pipe";

@Component({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
    standalone: true,
    imports: [CustomUpperCasePipe, LimitationString]
})

export class TodoCardComponent {
onCreateTodo(arg0: any) {
throw new Error('Method not implemented.');
}
    @Input ()
    todo: any
    
    @Output()
    deleteTodo = new EventEmitter()

    @Output()
    editTodo = new EventEmitter()

    readonly dialog = inject(MatDialog);

    openDialog(): void {
        const dialogRef = this.dialog.open(EditTodoDialogComponent, {
          data: {todo: this.todo},
        });

        dialogRef.afterClosed().subscribe(editResult => {
          console.log('МОДАЛКА ЗАКРЫЛАСЬ, ЗНАЧЕНИЕ ФОРМЫ:', editResult);
          this.editTodo.emit('editResult')
        });
      }
    
    ondeleteTodo (todoId: number) {
        this.deleteTodo.emit(todoId)
    }
}