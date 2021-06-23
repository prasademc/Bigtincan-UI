import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

import roles from '../data/userHeirarchy.json';

import { Role } from '../models/role.interface';

@Injectable()
export class RoleService {

  allRoles: Role[] = roles.roles as Role[];

  constructor() { }

  /**
   * Fetch the all roles
   * @returns
   */
  getRoles(): Observable<Role[]> {
    return of(this.allRoles);
  }

  /**
   * Fetch the role by it's ID
   * @param id
   * @returns
   */
  getRoleById(id: number): Observable<Role> {
    let role: Role = this.allRoles.find(role => role.Id === id) || { Id: 0, Name: '', Parent: 0 };
    return of(role);
  }
}
