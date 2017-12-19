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
	
	offeneRechnung(){
		this.blocked = localStorage.getItem('blocked');
		if(this.blocked == "true"){
			this.rechnung = true;
		}else{
			this.notBlocked =true;
		}
	}
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
  createFavorit() {
		this.favoritProperties.creator = localStorage.getItem('currentId');
		console.log(this.favoritProperties);
		this.favoritService.createFavorit(this.favoritProperties);
  }
   
     setFill(){
  console.log("Here");
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
  
  updateFavorit(){
	 this.favoritService.updateFavorit(this.favoritProperties);
  }
  
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
