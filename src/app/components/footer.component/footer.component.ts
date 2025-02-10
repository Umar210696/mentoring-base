import { Component } from "@angular/core";
import { SilverFooterDirective } from "../derictives/silver.footer.directive";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    standalone: true,
    imports: [SilverFooterDirective ],
})

export class FooterComponent {

}