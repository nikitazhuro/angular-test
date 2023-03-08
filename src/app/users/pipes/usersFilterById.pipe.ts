import { Pipe, PipeTransform } from '@angular/core'
import { User } from '../models'

@Pipe({
  name: 'usersFilterById'
})
export class UsersFilterByIdPipe implements PipeTransform {
  transform(users: User[], search: string): User[] {
    return users.filter((user) => `${user.id}`.includes(search))
  }
}