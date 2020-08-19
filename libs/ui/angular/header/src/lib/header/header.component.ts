import { Component, OnInit, Input } from '@angular/core';
import { NavMenu } from '../nav.menu';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  constructor() { }

  @Input('logo') logo: { [key: string]: string };
  @Input('menu') menu: NavMenu[];
  ngOnInit(): void {
  }

}
