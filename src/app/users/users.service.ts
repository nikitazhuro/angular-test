import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, delay } from "rxjs";
import { User } from "./models";

@Injectable()
export class UsersService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(delay(2000));
  }
}