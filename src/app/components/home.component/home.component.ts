import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { YellowCardsDirective } from "../derictives/yellow.cards.directive";
import { BoxShadowDirective } from "../derictives/box.shadow.directive";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: true,
    imports: [NgIf, YellowCardsDirective, BoxShadowDirective],
})

export class HomeComponent {
    
  isShowCatalogMen = true;


}