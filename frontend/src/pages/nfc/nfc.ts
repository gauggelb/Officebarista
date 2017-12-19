import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,, LoadingController } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';
import { Subscription } from 'rxjs/Rx';
import {Platform} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-nfc',
  templateUrl: 'nfc.html',
})
export class NfcPage {
	tagId:string="";
	loading: any;
	readingTag: boolean   = false;
	writingTag: boolean   = false;
	isWriting: boolean   = false;
	writeContent='';
	subscriptions: Array<Subscription> = new Array<Subscription>();
  
	  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,public loadingCtrl: LoadingController, public platform:Platform, private toastCtrl: ToastController,
    public nfc: NFC, public ndef: Ndef) { 
		this.cekNFC();console.log("ready");
	}
	
	cekNFC() {
		this.nfc.enabled().then(() => {
			console.log("Enabled");
			this.addListenNFC();
		});
	}

	addListenNFC() {
		this.nfc.addTagDiscoveredListener(nfcEvent => this.sesReadNFC(nfcEvent.tag)).subscribe(data => {
			if (data && data.tag && data.tag.id) {
				this.tagId = this.nfc.bytesToHexString(data.tag.id);
				if (this.tagId != '') {
					console.log( "TagID" + this.tagId );
				} else {
					console.log('NFC_NOT_DETECTED');
				}
			}
		});
	}

	sesReadNFC(data): void {
		console.log('NFC_WORKING');
	}
	

	failNFC(err) {
		console.log('NFC Failed :' + JSON.stringify(err));
	}


  
  ionViewWillLeave() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad NfcPage');
  }
  
  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'NFC...'
    });

    this.loading.present();
  }

}
