import { Component, Input, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { UserChangeService } from '../../services/user-change.service';

import { Role } from 'src/app/models/role.interface';
import { User } from '../../models/user.interface';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  @Input() roleDate: Role = { Id: 0, Name: '', Parent: 0 }
  users: User[] = [];
  selectedUser!: User;
  selectedUsers: User[] = [];
  userInterval!: ReturnType<typeof setInterval>;

  constructor(
    private userService: UserService,
    private userChangeService: UserChangeService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserByRoleId(this.roleDate.Id).subscribe(data => {
      if (data.length > 0) this.users = data
    });

    this.userChangeService.userId.subscribe(id => {
      if (id > 0) {
        this.selectedUser = this.users.find(user => user.Id === id) || this.selectedUser;
        if (this.selectedUser?.Child.length > 0) {
          let tmpUser: User[] = this.updateAllUser(this.users, this.selectedUser.Child);
          this.userInterval = setInterval(() => {
            if (tmpUser.length > 0) {
              tmpUser.forEach(user => {
                if (user.Child.length > 0) {

                } else {
                  this.users = tmpUser;
                  this.users.push(this.selectedUser);
                  if (this.userInterval) {
                    clearInterval(this.userInterval);
                  }
                }
              });
            } else {
              this.users = this.users.filter(user => user.Id === id);
              if (this.userInterval) {
                clearInterval(this.userInterval);
              }
            }
          }, 0);
        } else {
          this.users = this.users.filter(user => user.Id === id);
        }
      }
    });
  }

  /**
   * Updete all users list with selected user's subordinates
   * @param users
   * @param ids
   * @returns
   */
  private updateAllUser(users: User[], ids: Array<Number>): User[] {
    return users.filter((user) => !ids.find((id) => user.Id === id));
  }
}
