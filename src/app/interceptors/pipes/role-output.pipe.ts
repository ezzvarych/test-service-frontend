import {Pipe, PipeTransform} from '@angular/core';
import {Rol} from '../../model/user/rol';

@Pipe({
  name: 'role'
})
export class RoleOutputPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return Rol.getRoleFromOrdinal(value);
  }

}
