import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let filterData = [];
    let searchText = args[0];
    searchText = searchText.toLowerCase();
 
   
    filterData = value.filter((el: any) => el.productName.toLowerCase().includes(searchText));
    console.log("filter Date" , filterData.length);
    return filterData;
  }
}
