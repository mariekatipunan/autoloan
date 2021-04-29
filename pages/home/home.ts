import {Component } from '@angular/core';
import {NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {

  price: number;
  months: number;
  downpayment: number;
  loanamount: number;
  monthlypayment: number;
  downpaymentamount: number;
  totalinterest: number;
  interest:number;

calculateloan(){
  this.downpaymentamount=(this.price*this.downpayment)/100
  this.downpaymentamount = parseFloat(this.downpaymentamount.toFixed(2));
  this.loanamount=(this.price - this.downpaymentamount)
  this.loanamount = parseFloat(this.loanamount.toFixed(2));
  this.interest = 0.3026
  this.totalinterest=(this.loanamount * this.interest)/100
  this.totalinterest = parseFloat(this.totalinterest.toFixed(2));
  this.monthlypayment=(this.loanamount + this.totalinterest)/this.months
  this.monthlypayment = parseFloat(this.monthlypayment.toFixed(2));

}

constructor(public navCtrl: NavController) {
} 
}

