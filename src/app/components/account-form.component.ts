import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  @ViewChild ('newAcctForm')
  newAcctForm: NgForm;
  
  constructor() { }

  ngOnInit() {
  }

  newAcct() {
    console.log("newAcct() : ")
    for (let i in this.newAcctForm.value) {
      console.log('i=',i,' ,v=', this.newAcctForm.value[i]);
    } 

    this.newAcctForm.resetForm();
  }

}
