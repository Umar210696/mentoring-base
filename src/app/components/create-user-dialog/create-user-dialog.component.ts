import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule],
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss'
})
export class CreateUserDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    private snackBar: MatSnackBar,
  )
  {}

   @Output()
      CreateUser = new EventEmitter<any>();
  
      public form = new FormGroup ({
          userId: new FormControl('', [Validators.required, Validators.maxLength(10)]),
          title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
          completed: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      })
  // CreateUser: any; // Removed duplicate property
  
      // public submitForm(): void {
      //     console.log(this.form.value)
      //     this.CreateUser.emit(this.form.value)
      //     this.form.reset()
      // };

      public FormInput(): void {
        if (this.form.valid) {
          const user = this.form.value;
          this.dialogRef.close(user);
          this.snackBar.open('User is created', 'ok', {
            duration: 2000
          })
        }
      };
  
}
