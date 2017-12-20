/*Is called with the corresponding html file*/

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
  /*The login expect 3 parameters but as the first one is always the same, it is set in this file*/
  userName:'';
  loginData = {strategy:'local', email:'', password:''};
  data: any;
  users: any[];
  tokenTransfert: any;
  
  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {}

  /*Call the authenticationservice and its methode login. If it is successfull, the access token the service gives back has to be saved
  to be able to access any other data from the backend. As the same time, the new rootpage has to be set: it then becomes the homepage 
  with multiple possibilities*/	
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

  /*Gets the id of the user who is logged in. It will be used to create orders or to add favorit coffee*/
  getCurrentId(){
	this.authService.currentId(this.loginData)
	  .subscribe(data => { 
		localStorage.setItem('currentId',data.data[data.data.length-1]._id); 
		localStorage.setItem('userName',data.data[data.data.length-1].name);
		localStorage.setItem('role',data.data[data.data.length-1].role);
		localStorage.setItem('blocked',data.data[data.data.length-1].blocked);
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
