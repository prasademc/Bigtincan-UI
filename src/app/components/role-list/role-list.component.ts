import { Component, OnInit } from '@angular/core';

import { RoleService } from '../../services/role.service';

import { Role } from '../../models/role.interface';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  roles: Role[] = [];

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.getRoles().subscribe(data => {
      if (data.length > 0) this.roles = data;
    });
  }
}
