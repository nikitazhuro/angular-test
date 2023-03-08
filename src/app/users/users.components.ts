import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { User } from './models';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  usersFetching = false;
  titleSearch = '';
  idSearch = '';

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.usersFetching = true;

    this.users$ = this.usersService
      .getAll()
      .pipe(tap(() => (this.usersFetching = false)));
  }
}
