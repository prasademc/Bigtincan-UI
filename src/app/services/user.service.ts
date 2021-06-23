import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

import users from '../data/userHeirarchy.json';

import { User } from '../models/user.interface';

@Injectable()
export class UserService {

  allUsers: User[] = users.users as User[];

  constructor() { }

  /**
   * Fetch the all users
   * @returns
   */
  getUsers(): Observable<User[]> {
    return of(this.allUsers);
  }

  /**
   * Fetch the users belongs to role ID
   * @param roleId
   * @returns
   */
  getUserByRoleId(roleId: number): Observable<User[]> {
    let users: User[] = this.allUsers.filter(user => user.Role === roleId);
    return of(users);
  }

  /**
   * Fetch the user by it's ID
   * @param id
   * @returns
   */
  getUserById(id: number): Observable<User> {
    let user: User = this.allUsers.find(user => user.Id === id) || { Id: 0, Name: '', Role: 0 };
    return of(user);
  }
}
