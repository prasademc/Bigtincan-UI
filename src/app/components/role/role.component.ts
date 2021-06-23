import { Component, Input, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserByRoleId(this.roleDate.Parent).subscribe(data => {
      if (data.length > 0) this.users = data
    });
  }
}
