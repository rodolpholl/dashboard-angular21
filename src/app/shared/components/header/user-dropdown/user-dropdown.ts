import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Dropdown } from '../../ui/dropdown/dropdown';
import { DropdownItemTwo } from '../../ui/dropdown/dropdown-item/dropdown-item-two';


@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.html',
  imports:[CommonModule,RouterModule,Dropdown,DropdownItemTwo]
})
export class UserDropdown {
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }
}