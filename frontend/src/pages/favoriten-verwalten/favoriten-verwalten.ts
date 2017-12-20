/*Is called with the corresponding html file*/

import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FavoritProvider } from '../../providers/favorit/favorit';
import { OrdersProvider } from '../../providers/orders/orders';

@IonicPage()
@Component({
  selector: 'page-favoriten-verwalten',
  templateUrl: 'favoriten-verwalten.html',
})

export class FavoritenVerwaltenPage {
	hasFavorit = false;
	loading: any;
	bestellen = false;
	blocked = localStorage.getItem('blocked');
	notBlocked = false;
	rechnung = false;
	favoritProperties = {description:'', beanAmount:'', fillAmount:'',creator:''};
	orderProperties = {description:'', beanAmount:'', fillAmount:'', price:'2.5', date:Date.now(), buyer:''};
	data: any;
	listToLoad :any;
	
	/*Depending on the choosen coffee type, the fillamount options have to be changed. Therefore they have to be declared*/
	espressoList=['35', '40', '45', '50', '55', '60'];
	espressoMacchiatoList=['50','60','70','80'];
	coffeeList=['60','80','100','120','140','160','180','200','220','240','260'];
	capuccinoList=['100','120','140','160','180','200','220','240','260','280','300'];
	latteMacchiatoList=['200','220','240','260','280','300','320','340','360','380','400'];
	caffeeLatteList=['100','120','140','160','180','200','220','240','260','280','300'];
	  
  constructor(public navCtrl: NavController, public ordersService: OrdersProvider,public favoritService: FavoritProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
		console.log(localStorage.getItem('currentId'));
		this.getFavorit();
		console.log(this.favoritProperties);
		this.orderProperties.buyer = localStorage.getItem('currentId'); 
		this.offeneRechnung();
	}
	
	/*check if the user is blocked or not to adapdt the view*/
	offeneRechnung(){
		this.blocked = localStorage.getItem('blocked');
		if(this.blocked == "true"){
			this.rechnung = true;
		}else{
			this.notBlocked =true;
		}
	}
	/*If the user selected the order case, then the coffee will be ordered and will be saved as new favorit 
	is not existing (hasFavorite). Otherwise the existing favorit will be updated*/
	action(){
		 if(this.bestellen == true){
			this.orderProperties.description = this.favoritProperties.description;
			this.orderProperties.beanAmount = this.favoritProperties.beanAmount;
			this.orderProperties.fillAmount = this.favoritProperties.fillAmount;
			this.bestellenMethod();
			}
		if(this.hasFavorit == true){
			this.updateFavorit();
		}else{
			this.createFavorit();
			}
		}
	
	/*The creatFavorit method is called from provider favoritService*/
	createFavorit() {
		this.favoritProperties.creator = localStorage.getItem('currentId');
		console.log(this.favoritProperties);
		this.favoritService.createFavorit(this.favoritProperties);
	  }

	/*adapt the option to the choosen coffee type*/
	     setFill(){
		if(this.favoritProperties.description == "Capuccino"){
			this.listToLoad = this.capuccinoList;
		}
		if(this.favoritProperties.description == "Espresso"){
			this.listToLoad = this.espressoList;
		}
		if(this.favoritProperties.description == "Espresso Macchiato"){
			this.listToLoad = this.espressoMacchiatoList;
		}
		if(this.favoritProperties.description == "Kaffee"){
			this.listToLoad = this.coffeeList;
		}
		if(this.favoritProperties.description == "Latte Macchiato"){
			this.listToLoad = this.latteMacchiatoList;
		}
		if(this.favoritProperties.description == "Milchkaffee"){
			this.listToLoad = this.caffeeLatteList;
		}
	  }

	/*check if the user already have a favorit*/
	getFavorit(){
		 this.favoritService.getFavorit()
		  .subscribe(data => {
			if(data.data.length > 0){
				this.favoritProperties = data.data[0]; 
				this.hasFavorit = true;
				console.log(this.favoritProperties);
				};
			});
	}
	
	/*Call the service from provider to update favorit*/
	updateFavorit(){
		this.favoritService.updateFavorit(this.favoritProperties);
	  }
	
	/*Call the service from provider to order coffee*/
	bestellenMethod(){
		this.orderProperties.date = Date.now();
		this.ordersService.createOrder(this.orderProperties).then((result) => {
		}, (err) => {
			console.log(err);
			this.presentToast(err);
		});
	}

  
  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Saving...'
    });
    this.loading.present();
  }
	

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritenVerwaltenPage');
  }

}
