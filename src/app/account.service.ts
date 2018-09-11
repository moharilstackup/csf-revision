import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IAccount} from './account';
import { Observable } from 'rxjs/Observable';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _url: string = "/assets/data/accounts.json";

  constructor(private http: HttpClient) { }

  getAccts(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(this._url);
    // return [
    //   {"fullname":"John Denver","username":"jdenver"},
    //   {"fullname":"Jessica Drud","username":"jsdrud"}
    // ];
  }


  addAccount(newAcct){
    return this.http.post(`${environment.api_url}thought`, newAcct);
  }

}
