import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class UserChangeService {

  private userSubject = new BehaviorSubject<number>(0);
  userId = this.userSubject.asObservable();

  constructor() { }

  updatedUser(userId: number) {
    this.userSubject.next(userId);
  }
}
