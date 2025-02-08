import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'app-create-user-dialog',
    templateUrl: './create-user-dialog.component.html',
    styleUrl: './create-user-dialog.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule],
})

export class CreateUserDialogComponent {

    @Output()
    CreateUser = new EventEmitter()


    public form = new FormGroup ({
        name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        companyName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    }) 


    public submitForm(): void {
        console.log(this.form.value)
        this.CreateUser.emit(this.form.value)
        this.form.reset()
    }
}

