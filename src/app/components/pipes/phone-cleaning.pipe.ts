import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customDate',
    standalone: true,
    pure: true
})

export class PhoneCleaning implements PipeTransform {
    transform(value: Date | string, format: string = 'medium'): string {
        if (!value) return '';
    
        const date = new Date(value);
        return new Intl.DateTimeFormat('ru-RU', this.getFormatOptions(format)).format(date);
      }
    
      private getFormatOptions(format: string): Intl.DateTimeFormatOptions {
        switch (format) {
          case 'short':
            return { year: 'numeric', month: 'short', day: 'numeric' };
          case 'long':
            return { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          case 'medium':
          default:
            return { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        }
      }
}