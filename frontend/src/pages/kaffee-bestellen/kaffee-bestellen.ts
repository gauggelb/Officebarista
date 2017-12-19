import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders/orders';



@IonicPage()
@Component({
  selector: 'page-kaffee-bestellen',
  templateUrl: 'kaffee-bestellen.html',
})
export class KaffeeBestellenPage {
	createProperties = {description:'', beanAmount:'', fillAmount:'', price:'2.5', date:Date.now(), buyer:''};
	blocked = localStorage.getItem('blocked');
	notBlocked = false;
	rechnung = false;
	listToLoad :any;
	espressoList=['35', '40', '45', '50', '55', '60'];
	espressoMacchiatoList=['50','60','70','80'];
	coffeeList=['60','80','100','120','140','160','180','200','220','240','260'];
	capuccinoList=['100','120','140','160','180','200','220','240','260','280','300'];
	latteMacchiatoList=['200','220','240','260','280','300','320','340','360','380','400'];
	caffeeLatteList=['100','120','140','160','180','200','220','240','260','280','300'];
	loading: any;
	
	data: any;
  constructor(public navCtrl: NavController, public orderService: OrdersProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
	this.createProperties.buyer = localStorage.getItem('currentId'); 
	console.log(localStorage.getItem('currentId'));
	this.createProperties.date = Date.now();
	this.listToLoad = this.espressoList;
	this.offeneRechnung();
  }
  
  offeneRechnung(){
		this.blocked = localStorage.getItem('blocked');
		console.log("this blocked"  + this.blocked);
		if(this.blocked == "true"){
			this.rechnung = true;
		}else{
			this.notBlocked =true;
		}
	}
	
  setFill(){
  console.log("Here");
	if(this.createProperties.description == "Capuccino"){
		this.listToLoad = this.capuccinoList;
	}
	if(this.createProperties.description == "Espresso"){
		this.listToLoad = this.espressoList;
	}
	if(this.createProperties.description == "Espresso Macchiato"){
		this.listToLoad = this.espressoMacchiatoList;
	}
	if(this.createProperties.description == "Kaffee"){
		this.listToLoad = this.coffeeList;
	}
	if(this.createProperties.description == "Latte Macchiato"){
		this.listToLoad = this.latteMacchiatoList;
	}
	if(this.createProperties.description == "Milchkaffee"){
		this.listToLoad = this.caffeeLatteList;
	}
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad KaffeeBestellenPage');
  }
  
    createOrder() {
    this.showLoader();
    this.orderService.createOrder(this.createProperties).then((result) => {
      this.loading.dismiss();
    }, (err) => {
		console.log(err);
		this.loading.dismiss();
		this.presentToast(err);
    });
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
  
  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Loading...'
    });

    this.loading.present();
  }

}
