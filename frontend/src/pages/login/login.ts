import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
  
  userName:'';
  loginData = {strategy:'local', email:'', password:''};
  data: any;
  users: any[];
  tokenTransfert: any;
  
  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {}
	
  doLogin() {
    this.showLoader();
	this.getCurrentId();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      localStorage.setItem('token', this.data.accessToken);
	  this.tokenTransfert = this.data.accessToken;
      this.navCtrl.setRoot(HomePage, {token: this.tokenTransfert});
    }, (err) => {
		console.log(err);
		this.loading.dismiss();
		this.presentToast(err);
    });
	
  }

  getCurrentId(){
	this.authService.currentId(this.loginData)
	  .subscribe(data => { 
		localStorage.setItem('currentId',data.data[data.data.length-1]._id); 
		localStorage.setItem('userName',data.data[data.data.length-1].name);
		localStorage.setItem('role',data.data[data.data.length-1].role);
		localStorage.setItem('blocked',data.data[data.data.length-1].blocked);
		console.log("blocked " + localStorage.getItem('blocked'));
		});
	}

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
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
  

}