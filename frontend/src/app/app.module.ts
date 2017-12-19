import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { KaffeeBestellenPage } from '../pages/kaffee-bestellen/kaffee-bestellen';
import { UserAnzeigenPage } from '../pages/user-anzeigen/user-anzeigen';
import { UserVerwaltungPage } from '../pages/user-verwaltung/user-verwaltung';
import {RechnungAnsehenPage} from '../pages/rechnung-ansehen/rechnung-ansehen';
import {FavoritenVerwaltenPage} from '../pages/favoriten-verwalten/favoriten-verwalten';
import {LagerVerwaltenPage} from '../pages/lager-verwalten/lager-verwalten';
import {MaterialAnzeigenPage} from '../pages/material-anzeigen/material-anzeigen';
import {NewMaterialPage} from '../pages/new-material/new-material';
import {NfcPage} from '../pages/nfc/nfc';

import {HttpModule} from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NFC, Ndef } from '@ionic-native/nfc';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { OrdersProvider } from '../providers/orders/orders';
import { FavoritProvider } from '../providers/favorit/favorit';
import { MaterialProvider } from '../providers/material/material';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
	LoginPage,
	KaffeeBestellenPage,
	MaterialAnzeigenPage,
	NewMaterialPage,
	RechnungAnsehenPage,
	FavoritenVerwaltenPage,
	LagerVerwaltenPage,
	UserAnzeigenPage,
	UserVerwaltungPage,
	NfcPage
	
  ],
  imports: [
    BrowserModule,
	HttpModule, 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	LoginPage,
	UserAnzeigenPage,
	UserVerwaltungPage,
	KaffeeBestellenPage,
	RechnungAnsehenPage,
	FavoritenVerwaltenPage,
	LagerVerwaltenPage,
	MaterialAnzeigenPage,
	NewMaterialPage,
	NfcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	NFC,
	Ndef,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    OrdersProvider,
    FavoritProvider,
    MaterialProvider
  ]
})
export class AppModule {}
