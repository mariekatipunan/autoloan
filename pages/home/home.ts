import {Component } from '@angular/core';
import {NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  loan: number;
  price : number;
  months: number;
  downpayment: number;
  loanamount: number;
  monthlypayment: number;
  downpaymentamount: number;
  totalinterest: number;

constructor(public navCtrl: NavController) {}

calculatedownpaymentamount() {
  this.downpaymentamount=this.price*this.downpayment/100;
}
calculateloanamount () {
  this.loanamount=this.price - this.downpaymentamount;
}
calculatetotalinterest (){
  this.totalinterest=this.loanamount * 0.3026;
}
calculatemonthlypayment () {
  this.monthlypayment=(this.loanamount + this.totalinterest)/this.months;
}
}

