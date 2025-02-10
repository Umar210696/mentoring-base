import { HostBinding, HostListener } from "@angular/core";
import { Directive } from "@angular/core";

// @Directive({
//     selector: '[silver]',
//     standalone: true,
// })

// export class SilverDirective {
//     // constructor(private elementRef: ElementRef) {
//     //   console.log('RedDirective работает!', this.elementRef.nativeElement);
//     //   this.elementRef.nativeElement.style.backgroundColor = 'silver';
//     // };
//   }

@Directive({
    selector: '[red]',
    standalone: true,
})
export class RedDirective {
    color = 'defolt';
    textTransform = 'lowercase';

    @HostBinding('style.backgroundColor')
    get backgroundColor() {
        return this.color;
    }

    @HostBinding('style.textTransform')
    get textTransformGetter() {
        return this.textTransform;
    }

    @HostListener('mouseenter')
    enter() {
        this.color = 'red';
        this.textTransform = 'uppercase';
    }

    @HostListener('mouseleave')
    leave() {
        this.color = 'white';
        this.textTransform = 'lowercase';
    }
}

