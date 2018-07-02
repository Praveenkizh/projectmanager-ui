import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterEndDate'
})
export class FilterEndDate implements PipeTransform {
  transform(items: any[], searchEndDate: Date): any[] {
    if(!items) return [];
    if(!searchEndDate) return items;
    
return items.filter( it => {
      return it.endDate == searchEndDate ;
    });
   }

   
}