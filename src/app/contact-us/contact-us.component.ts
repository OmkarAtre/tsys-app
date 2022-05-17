import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private user1:UserProfileService) {
    console.log("i am in contact-us");
   }

  ngOnInit() {

    let addr=this.user1.getAddress();
    console.log(addr);
  }

}
