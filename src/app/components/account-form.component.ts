import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  @ViewChild ('newAcctForm')
  newAcctForm: NgForm;
  
  public accts = [];

  constructor(private _accountService:AccountService) { }

  ngOnInit() {
    //this.accts = this._accountService.getAccts();
    this._accountService.getAccts()
      .subscribe(data=>this.accts=data);
  }


  newAcct() {
    console.log("newAcct() : ")
    for (let i in this.newAcctForm.value) {
      console.log('i=',i,' ,v=', this.newAcctForm.value[i]);
    } 

    this._accountService
    .addAccount(this.newAcctForm.value)
    .subscribe((result)=>{
      console.log(result);
    });

    this.newAcctForm.resetForm();
  }

}

