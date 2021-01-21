import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HelpersService } from 'src/app/shared/services/helpers.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  feedList: any[] = [];
  userList: any[] = [];

  constructor(private helperService: HelpersService, private router: Router) { }


  ngOnInit() {
    this.getFeeds();
    this.getUsers();
  }

  getFeeds() {
    this.helperService.getFeeds().subscribe((response) => {

      this.feedList = response;
    }, (err) => {

      throw err;
    });
  }

  getUsers() {
    this.helperService.getUsers().subscribe((response) => {

      this.userList = response;
    }, (err) => {

      throw err;
    });
  }

  logout() {
    this.helperService.resetToke();
    this.router.navigate(['login']);
  }
}
