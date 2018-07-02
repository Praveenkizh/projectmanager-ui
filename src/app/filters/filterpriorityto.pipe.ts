import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterPriorityTo'
})
export class FilterPriorityTo implements PipeTransform {
  transform(items: any[], searchPriorityTo: Number): any[] {
    if(!items) return [];
    if(!searchPriorityTo) return items;
    
return items.filter( it => {
      return it.priority <= searchPriorityTo ;
    });
   }

   
}