import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterPriorityFrom'
})
export class FilterPriorityFrom implements PipeTransform {
  transform(items: any[], searchPriorityFrom: Number): any[] {
    if(!items) return [];
    if(!searchPriorityFrom) return items;
    
return items.filter( it => {
      return it.priority >= searchPriorityFrom ;
    });
   }

   
}