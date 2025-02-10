import { DatePipe, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PhoneSanitize } from "../pipes/phone-sanitize.pipe";
import { YellowDirective } from "../derictives/yellow.directive";




@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: true,
    imports: [NgIf, RouterLink, DatePipe, PhoneSanitize, YellowDirective],
})

export class HeaderComponent {
   
  phoneNumber: string | undefined;

  todayDate = new Date ();
    
  isShowCatalog = true;


  readonly headerItem1 = 'Главная';
  readonly headerItem2 = 'О компании';
  readonly headerItem3 = 'Каталог';


  readonly header2Item1 = 'Каталог';
  readonly header2Item2 = 'Стройматериалы';
  readonly header2Item3 = 'Инструменты';
  readonly header2Item4 = 'Электрика';
  readonly header2Item5 = 'Интерьер и одежда';

}