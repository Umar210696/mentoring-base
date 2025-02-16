import { AsyncPipe, DatePipe, NgIf } from "@angular/common";
import { Component, inject, } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PhoneSanitize } from "../pipes/phone-sanitize.pipe";
import { YellowDirective } from "../derictives/yellow.directive";
import { MatDialog } from "@angular/material/dialog";
import { AuthComponent } from "../auth/auth.component";
import { UserService } from "../../guards/user.auth.service";





@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: true,
    imports: [NgIf, RouterLink, DatePipe, PhoneSanitize, YellowDirective, AsyncPipe],
})

export class HeaderComponent {
   
  phoneNumber: string | undefined;

  todayDate = new Date ();
    
  isShowCatalog = true;

  private readonly dialog = inject(MatDialog)
  public readonly userService: UserService = inject(UserService)


  readonly headerItem1 = 'Главная';
  readonly headerItem2 = 'О компании';
  readonly headerItem3 = 'Каталог';


  readonly header2Item1 = 'Каталог';
  readonly header2Item2 = 'Стройматериалы';
  readonly header2Item3 = 'Инструменты';
  readonly header2Item4 = 'Электрика';
  readonly header2Item5 = 'Интерьер и одежда';



  public openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: "400px",
      height: "200px",
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('Результат подптски диалогового окна', result)
      if (result === 'admin') {
        this.userService.loginAsAdmin()
      } else if (result === 'user') {
        this.userService.loginAsUser()
      } else return undefined
    });
  }
    public logout() {
      if(confirm('Вы точно хотите выйти')) {
      console.log('Совершили logout')
       return this.userService.logout()
      } else return false;
    } 
  
}
