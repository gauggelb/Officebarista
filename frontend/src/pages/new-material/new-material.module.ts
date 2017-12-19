import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewMaterialPage } from './new-material';

@NgModule({
  declarations: [
    NewMaterialPage,
  ],
  imports: [
    IonicPageModule.forChild(NewMaterialPage),
  ],
})
export class NewMaterialPageModule {}
