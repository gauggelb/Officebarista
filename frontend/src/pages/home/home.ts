import { Component } from '@angular/core';
import {  App, MenuController, NavController, NavParams } from 'ionic-angular';

import {KaffeeBestellenPage} from '../kaffee-bestellen/kaffee-bestellen';
import {RechnungAnsehenPage} from '../rechnung-ansehen/rechnung-ansehen';
import {FavoritenVerwaltenPage} from '../favoriten-verwalten/favoriten-verwalten';
import {LagerVerwaltenPage} from '../lager-verwalten/lager-verwalten';
import {UserVerwaltungPage} from '../user-verwaltung/user-verwaltung';
import {LoginPage} from '../login/login';
import {NfcPage} from '../nfc/nfc';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	userName: string;
	admin=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,
              public app: App) {
			  this.userName = localStorage.getItem('userName');
			  this.role();
	
  }
  kaffeeBestellen(){
		this.navCtrl.push(KaffeeBestellenPage);
	}

	rechnungAnsehen(){
		this.navCtrl.push(RechnungAnsehenPage);
	}	
	favoritVerwalten(){
		this.navCtrl.push(FavoritenVerwaltenPage);
	}
	lagerVerwalten(){
		this.navCtrl.push(LagerVerwaltenPage);
	}
	userVerwalten(){
		this.navCtrl.push(UserVerwaltungPage);
	}
	
	nfc(){
		this.navCtrl.push(NfcPage);
	}
	
	role(){
		if(localStorage.getItem('role') == 'admin'){
			this.admin = true;
		}
	}
	
	logout(){
		this.menuCtrl.close();
		var nav = this.app.getRootNav();
		nav.setRoot(LoginPage);
		
	}

}
