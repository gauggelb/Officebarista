/*Is called with the corresponding html file*/

import { Component } from '@angular/core';
import { NavController, LoadingController} from 'ionic-angular';
import {MaterialProvider} from '../../providers/material/material'

@IonicPage()
@Component({
  selector: 'page-new-material',
  templateUrl: 'new-material.html',
})
export class NewMaterialPage {
	material = {description:'', inStock:'', criticalStock:'', ekPrice:'', vkPrice:'' };
  constructor(public navCtrl: NavController, public materialService: MaterialProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewMaterialPage');
  }
	
 /*Create a newmaterial throught the material's service*/	 
  newMaterial(){
	 this.materialService.newMaterial(this.material);
			 localStorage.removeItem('New');
  }

}
