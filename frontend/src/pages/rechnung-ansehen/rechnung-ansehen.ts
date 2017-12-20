/*Is called with the corresponding html file*/

import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders/orders';

/**
 * Generated class for the RechnungAnsehenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rechnung-ansehen',
  templateUrl: 'rechnung-ansehen.html',
})
export class RechnungAnsehenPage {
  orders: any;
  orderProperties ={description:'', beanAmount:'', milkAmount:'', date:'', price:'', };
  totalPrice=0;
  
  constructor(public navCtrl: NavController, public ordersService: OrdersProvider,
  public loadingCtrl: LoadingController) {
    this.getRechnung();
	
  }
	
  /*get all the orders of a user through order's service*/	
  getRechnung(){
	this.orders=this.ordersService.getOrder()
	  .subscribe(data => {this.orders = data; this.getSum(data.data);});	
  }
	
	
  /*calculate the price of all orders*/		
  getSum(orders){
	for(var i = 0; i < orders.length; i++){
		this.totalPrice = this.totalPrice + parseFloat(orders[i].price);		
	}
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RechnungAnsehenPage');
  }
  

}
