import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'limitationString',
    standalone: true,
    pure: true,
})

export class LimitationString implements PipeTransform {
    transform(value: string, limit: number, trail: string = '...'): string {
        if (!value) return '';
        return value.length > limit ? value.substring(0, limit) + trail : value
    }
}