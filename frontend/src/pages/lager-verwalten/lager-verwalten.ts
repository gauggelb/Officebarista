import { Component } from '@angular/core';
import { NavController, LoadingController} from 'ionic-angular';
import {MaterialProvider} from '../../providers/material/material'
import {MaterialAnzeigenPage} from '../material-anzeigen/material-anzeigen'
import {NewMaterialPage} from '../new-material/new-material'

@IonicPage()
@Component({
  selector: 'page-lager-verwalten',
  templateUrl: 'lager-verwalten.html',
})
export class LagerVerwaltenPage {
	materials: any;
   materialProperties: {description:'', inStock:'', criticalStock:'', ekPrice:'', vkPrice:''};	
   constructor(public navCtrl: NavController, public materialService: MaterialProvider, public loadingCtrl: LoadingController) {
			this.allMaterials();
   }
	
  
  allMaterials(){
	  this.materials = this.materialService.allMaterials()
	  .subscribe(data => {this.materials = data; });
  }

showMaterial(matId){
	localStorage.setItem('materialId',matId);
	 this.navCtrl.push(MaterialAnzeigenPage);
  }
  
  newMaterial(){
	localStorage.removeItem('materialId');
	this.navCtrl.push(NewMaterialPage);
  }

  ionViewDidLoad(id) {
    console.log('ionViewDidLoad LagerVerwaltenPage');
  }
  
  ionViewWillEnter() {
       this.allMaterials();
	}

}