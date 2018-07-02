import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterTask'
})
export class FilterTaskPipe implements PipeTransform {
  transform(items: any[], searchTask: string): any[] {
    if(!items) return [];
    if(!searchTask) return items;
    searchTask = searchTask.toString().toLowerCase();
return items.filter( it => {
      return it.task.toString().toLowerCase().includes(searchTask);
    });
   }

   
}