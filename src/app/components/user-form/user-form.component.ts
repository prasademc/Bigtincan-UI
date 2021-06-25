import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserChangeService } from '../../services/user-change.service';

import { User } from '../../models/user.interface';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  inputValue?: string;
  filteredOptions: string[] = [];
  users: User[] = [];
  userForm!: FormGroup;
  @ViewChild('userInput', { static: false })
  inputElem!: ElementRef;
  userID: number = 0;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private userChangeService: UserChangeService,
  ) {
    this.filteredOptions = this.users.map(user => user.Name);
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      if (data.length > 0) this.users = data;
    });

    this.userForm = this.fb.group({
      userSelected: ['', Validators.required]
    });
  }

  onChange(value: string): void {
    if (value) {
      this.filteredOptions = this.users.filter(user => user.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1).map(user => user.Name);
    }
  }

  onSubmit(): void {
    let selectedUserId: number = this.users.find(user => user.Name.toLowerCase().indexOf(this.userForm.value.userSelected?.toLowerCase()) !== -1)?.Id || 0;
    if(this.userID !== selectedUserId) {
      this.userChangeService.updatedUser(selectedUserId);
      this.userID = selectedUserId;
    }
  }
}
