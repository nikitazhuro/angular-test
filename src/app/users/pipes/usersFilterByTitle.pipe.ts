import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models';

@Pipe({
  name: 'userFilterByTitle',
})
export class UserFilterByTitlePipe implements PipeTransform {
  transform(users: User[], search: string): User[] {
    return users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
}
