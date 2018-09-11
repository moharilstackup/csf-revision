import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccts() {
    return [
      {"fullname":"John Denver","username":"jdenver"},
      {"fullname":"Jessica Drud","username":"jsdrud"}
    ];
  }


}
