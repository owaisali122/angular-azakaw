import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'azakaw-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
