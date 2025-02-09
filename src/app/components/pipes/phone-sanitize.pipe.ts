import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'phoneSanitize',
    standalone: true,
    pure: true,
})

export class PhoneSanitize implements PipeTransform {
    transform(value: string): string {
        if (!value) return '';
        return value.replace(/-/g, '')
    }
}