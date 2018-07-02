import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterStartDate'
})
export class FilterStartDate implements PipeTransform {
  transform(items: any[], searchStartDate: Date): any[] {
    if(!items) return [];
    if(!searchStartDate) return items;
    
return items.filter( it => {
      return it.startDate == searchStartDate ;
    });
   }

   
}