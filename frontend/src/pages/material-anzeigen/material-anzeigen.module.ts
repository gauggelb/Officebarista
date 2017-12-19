import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaterialAnzeigenPage } from './material-anzeigen';

@NgModule({
  declarations: [
    MaterialAnzeigenPage,
  ],
  imports: [
    IonicPageModule.forChild(MaterialAnzeigenPage),
  ],
})
export class MaterialAnzeigenPageModule {}
