import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
@Component({
	selector: 'app-user-navbar',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.style.css']
})

export class UserNavComponent implements OnInit {
	constructor(private userService: UserService,
							private router: Router) {
	}

	ngOnInit() {
	}

  logOut() {
    this.userService.logOut()
      .subscribe(
        success => {
          this.router.navigate(['/']);
        },
        error => {
          console.dir(error);
        }
      )
  }
}