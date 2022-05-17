import { Injectable } from '@angular/core';
import { UserProfileService } from './user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor(private user:UserProfileService) {

    console.log(user.getAddress);
   }
   url="http";
}
