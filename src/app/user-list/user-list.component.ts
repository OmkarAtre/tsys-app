import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private user: UserProfileService) {
    console.log("i am in user-list");
    let name = this.user.getCompanyName();
    console.log(name);
  }

  ngOnInit() {


  }

}
