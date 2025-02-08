import { Component, inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { User } from "../users.list.component";

@Component({
    selector: 'app-edit-user-dialog',
    templateUrl: './edit-user-dialog.component.html',
    styleUrl: './edit-user-dialog.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogClose],
})

export class EditUserDialogComponent implements OnInit {
    readonly data = inject<{user: User}>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>);

    
        public form = new FormGroup ({
            id: new FormControl(new Date().getTime()),
            name: new FormControl(this.data.user.name, [Validators.required, Validators.maxLength(40)]),
            email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
            website: new FormControl(this.data.user.website, [Validators.required, Validators.maxLength(40)]),
            company: new FormGroup({
                name:  new FormControl(this.data.user.company.name, [Validators.required, Validators.maxLength(40)]),
            })
        });


        get userWithUpdatedFields() {
            return{
                ...this.form.value,
                id: this.data.user.id,
            }
        }

        ngOnInit(): void {
            this.form.patchValue(this.data.user)
        }

}