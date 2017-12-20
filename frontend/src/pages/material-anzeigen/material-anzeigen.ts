/*Is called with the corresponding html file*/

import { Component } from '@angular/core';
import { NavController, LoadingController} from 'ionic-angular';
import {MaterialProvider} from '../../providers/material/material'

@Component({
  selector: 'page-material-anzeigen',
  templateUrl: 'material-anzeigen.html',
})
export class MaterialAnzeigenPage {
  material = {description:'', inStock:'', criticalStock:'', ekPrice:'', vkPrice:'' };
  id:any;
  constructor(public navCtrl: NavController, public materialService: MaterialProvider, public loadingCtrl: LoadingController) {
		this.details();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialAnzeigenPage');
  }
	
/*Get the material data throught the material's service*/	
details(){
	this.materialService.getMaterial().subscribe(data => { 
		this.material= (data.data)[0];
		this.id =  (data.data)[0]._id;
	});
}
	
/*Update the material data throught the material's service*/	
updateMaterial(){
	console.log(this.id);
	this.materialService.updateMaterial(this.id,this.material);
}
}
