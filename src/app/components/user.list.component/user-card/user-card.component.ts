import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import {MatDialog,} from '@angular/material/dialog';
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";
import { CustomUpperCasePipe } from "../../pipes/uper-case.pipe";
import { RedDirective } from "../../derictives/red.directive";
import { BoxShadowDirective } from "../../derictives/box.shadow.directive";
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    imports: [CustomUpperCasePipe, RedDirective, BoxShadowDirective, MatTooltipModule]
})

export class UserCardComponent {
    @Input ()
    user: any

    @Output()
    deleteUser = new EventEmitter()

    @Output()
    editUser = new EventEmitter()

    readonly dialog = inject(MatDialog);

    openDialog(): void {
        const dialogRef = this.dialog.open(EditUserDialogComponent, {
          data: {user: this.user},
        });
    
        dialogRef.afterClosed().subscribe(editResult => {
          console.log('Модальное окно закрылось: ', editResult);
          if (!editResult) return
          this.editUser.emit(editResult);
        });
      }

    onDeleteUser(userId: number) {
        this.deleteUser.emit(userId)
    }

    
}