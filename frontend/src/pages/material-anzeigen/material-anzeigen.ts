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
	
	details(){
			this.materialService.getMaterial()
		  .subscribe(data => { this.material= (data.data)[0];
		  this.id =  (data.data)[0]._id;
		  console.log(this.material);});
		}

	updateMaterial(){
		console.log(this.id);
		this.materialService.updateMaterial(this.id,this.material);
	}
}
