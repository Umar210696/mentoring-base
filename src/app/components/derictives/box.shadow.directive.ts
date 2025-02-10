import {Directive, HostBinding, HostListener} from "@angular/core";


@Directive({
    selector: '[shadow]',
    standalone: true,
})

export class BoxShadowDirective {

    @HostBinding('style.boxShadow')
     boxShadow = '';

     @HostListener('mouseenter')
     enter() {
        this.boxShadow = '0 8px 10px rgba(0, 0, 0, 0.5)';
     }

     @HostListener('mouseleave')
     leave() {
        this.boxShadow = ''
     }

}
