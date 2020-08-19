import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'ui-profile-dropdown',
  templateUrl: './profile-dropdown.component.html'
})
export class ProfileDropdownComponent implements OnInit {
  isOpen: boolean = false;
  @HostListener('document:keyup', ['$event']) onKeyUp(event: KeyboardEvent) {
    if (event.key === "Esc" || event.key === "Escape") {
      this.isOpen = false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
