import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KaffeeBestellenPage } from './kaffee-bestellen';

@NgModule({
  declarations: [
    KaffeeBestellenPage,
  ],
  imports: [
    IonicPageModule.forChild(KaffeeBestellenPage),
  ],
})
export class KaffeeBestellenPageModule {}
