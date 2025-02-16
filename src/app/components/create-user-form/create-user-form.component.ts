import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from "@angular/material/dialog";
import { CreateUserDialogComponent } from "../create-user-dialog/create-user-dialog.component";


@Component({
    selector: 'app-create-user-form',
    templateUrl: './create-user-form.component.html',
    styleUrl: './create-user-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule],
})

export class CreateUserFormComponent {

    @Output()
    CreateUser = new EventEmitter();

    constructor(public dialog: MatDialog) {};

    public form = new FormGroup ({
        name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        companyName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    });


    public submitForm(): void {
        console.log(this.form.value)
        this.CreateUser.emit(this.form.value)
        this.form.reset()
    };

       dialogCreateUser() {
        const dialogRef = this.dialog.open(CreateUserDialogComponent, {
            width: '400px'
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.CreateUser.emit(result)
            }
        })
       };
}

