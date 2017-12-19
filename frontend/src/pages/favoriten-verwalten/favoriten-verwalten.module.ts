import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritenVerwaltenPage } from './favoriten-verwalten';

@NgModule({
  declarations: [
    FavoritenVerwaltenPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritenVerwaltenPage),
  ],
})
export class FavoritenVerwaltenPageModule {}
