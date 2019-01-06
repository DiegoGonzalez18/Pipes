import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): any {
      // tslint:disable-next-line:prefer-const
      let  aux = '';
    if ( !activar ) {
      return value;
    } else    {
      for ( let i = 0 ; i < value.length; i++) {
      aux += '*';
      }
    return aux;
  }
  }

}
