import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-todo-dialog',
  standalone: true,
  templateUrl: './create-todo-dialog.component.html',
  styleUrl: './create-todo-dialog.component.scss',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule]
})
export class CreateTodoDialogComponent {
  
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
