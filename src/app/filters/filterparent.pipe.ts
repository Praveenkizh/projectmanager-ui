import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterParent'
})
export class FilterParentPipe implements PipeTransform {
  transform(items: any[], searchParent: string): any[] {
    if(!items) return [];
    if(!searchParent) return items;
    searchParent = searchParent.toString().toLowerCase();
return items.filter( it => {
      return it.parentTask.toString().toLowerCase().includes(searchParent);
    });
   }

   
}