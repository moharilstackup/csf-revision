import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  @ViewChild ('newAcctForm')
  newAcctForm: NgForm;
  
  public accts = [];

  constructor(private _accountService:AccountService) { }

  ngOnInit() {
    this.accts = this._accountService.getAccts();
  }


  newAcct() {
    console.log("newAcct() : ")
    for (let i in this.newAcctForm.value) {
      console.log('i=',i,' ,v=', this.newAcctForm.value[i]);
    } 

    this.newAcctForm.resetForm();
  }

}
