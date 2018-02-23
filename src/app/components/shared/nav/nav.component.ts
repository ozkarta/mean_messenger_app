import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../service/app.service';
@Component({
  selector: 'app-main-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.style.css']
})

export class NavComponent implements OnInit {
  public user: any = null;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.user.subscribe(
      user => {
        this.user = user;
      }
    );
  }
}