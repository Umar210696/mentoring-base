import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import {MatDialogClose} from '@angular/material/dialog';

@Component ({
    selector: 'app-edit-todo-dialog',
    templateUrl: './edit-todo-dialog.component.html',
    styleUrl: './edit-todo-dialog.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, MatFormField, MatLabel, MatIcon, MatDialogClose],
})

export class EditTodoDialogComponent {
    readonly data = inject(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef<EditTodoDialogComponent>);

     public form = new FormGroup ({
            userId: new FormControl(this.data.userId, [Validators.required, Validators.maxLength(10)]),
            title: new FormControl(this.data.title, [Validators.required, Validators.maxLength(10)]),
            completed: new FormControl(this.data.complited, [Validators.required, Validators.maxLength(10)]),
        })

        get userWithUpdatedFirlds() {
            return {
                ...this.form.value,
                id: this.data.todo.id
            }
        }
} 