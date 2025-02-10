import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector: '[silver]',
    standalone: true,
})

export class SilverFooterDirective {
    color = '';
    // textTransform = 'lowercase';

    @HostBinding('style.backgroundColor') 
     get backgroundColor() {
       return this.color
    }

//     @HostBinding('style.backgroundColor') 
//     get  textTransformFooter() {
//       return this.textTransform
//    }

    @HostListener('mouseenter')
    enter() {
        this.color = '#4b565e';
        // this.textTransform = 'uppercase';
    }

    @HostListener('mouseleave')
    leave() {
        this.color = '#F0BA4E';
        // this.textTransform = 'lawercase';
    }

}