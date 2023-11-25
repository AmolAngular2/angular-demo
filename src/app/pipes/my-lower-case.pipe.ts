import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myLowerCase',
  pure:true
})
export class MyLowerCasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    console.log("Inside Pipe");
      const transformedValue = value.toLocaleLowerCase();
      return transformedValue;
  }

}
