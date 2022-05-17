import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor() { 
    console.log("i am in service")
  }

  getAddress()
  {
    let add={
      area:"baner",
      pincode:3333,
      locality:"tower"
    }
    return add;
  }

  getCompanyName()
  {
    return "t-sys";
  }
}
