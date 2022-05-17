import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  hello:any

  constructor(private http:HttpClient) {
    this.http.get("https://reqres.in/api/users?page=2").subscribe((data)=>
    {
      this.hello=data
    })
  }

  ngOnInit() {


  }

}
