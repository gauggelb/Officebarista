import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LagerVerwaltenPage } from './lager-verwalten';

@NgModule({
  declarations: [
    LagerVerwaltenPage,
  ],
  imports: [
    IonicPageModule.forChild(LagerVerwaltenPage),
  ],
})
export class LagerVerwaltenPageModule {}
