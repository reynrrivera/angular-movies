import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'profit'})

export class profitPipe implements PipeTransform{
    transform(value: number, profitPercent = 10): string {
        return (value*profitPercent*1/100).toFixed(2);
    }
}