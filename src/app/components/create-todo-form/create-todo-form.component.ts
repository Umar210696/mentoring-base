import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'app-create-todo-form',
    templateUrl: './create-todo-form.component.html',
    styleUrl: './create-todo-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule]
})

export class CreateTodoFormComponent {
    @Output()
    CreateTodo = new EventEmitter()


    public form = new FormGroup ({
        userId: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        completed: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    })


    public submitForm(): void {
        console.log(this.form.value)
        this.CreateTodo.emit(this.form.value)
        this.form.reset()
    }
}