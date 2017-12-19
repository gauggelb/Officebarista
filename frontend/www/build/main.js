webpackJsonp([6],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.loginData = { strategy: 'local', email: '', password: '' };
    }
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.showLoader();
        this.getCurrentId();
        this.authService.login(this.loginData).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            localStorage.setItem('token', _this.data.accessToken);
            _this.tokenTransfert = _this.data.accessToken;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { token: _this.tokenTransfert });
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    LoginPage.prototype.getCurrentId = function () {
        this.authService.currentId(this.loginData)
            .subscribe(function (data) {
            localStorage.setItem('currentId', data.data[data.data.length - 1]._id);
            localStorage.setItem('userName', data.data[data.data.length - 1].name);
            localStorage.setItem('role', data.data[data.data.length - 1].role);
            localStorage.setItem('blocked', data.data[data.data.length - 1].blocked);
            console.log("blocked " + localStorage.getItem('blocked'));
        });
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\user\Desktop\project\src\pages\login\login.html"*/'<ion-content class="login-content">\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <h3>Login\n	  <img class="image" height="40px" src="../imgs/logo.jpg"/></h3>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<br><br><br><br><br>\n\n  <form (submit)="doLogin()">\n  <br><br>\n	<ion-list>\n		<ion-item > \n		  <ion-label stacked>Email</ion-label>\n		  <ion-input [(ngModel)]="loginData.email" name="email" type="text" placeholder="Email"></ion-input>\n		</ion-item>\n		<ion-item>\n		  <ion-label stacked>Passwort</ion-label>\n		  <ion-input [(ngModel)]="loginData.password" name="password" type="password" placeholder="Passwort"></ion-input>\n		</ion-item>\n	</ion-list>\n	<br><br>\n    <button ion-button block type="submit" class="submit-btn">Login</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\project\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritenVerwaltenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorit_favorit__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_orders_orders__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritenVerwaltenPage = (function () {
    function FavoritenVerwaltenPage(navCtrl, ordersService, favoritService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.ordersService = ordersService;
        this.favoritService = favoritService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.hasFavorit = false;
        this.bestellen = false;
        this.blocked = localStorage.getItem('blocked');
        this.notBlocked = false;
        this.rechnung = false;
        this.favoritProperties = { description: '', beanAmount: '', fillAmount: '', creator: '' };
        this.orderProperties = { description: '', beanAmount: '', fillAmount: '', price: '2.5', date: Date.now(), buyer: '' };
        this.espressoList = ['35', '40', '45', '50', '55', '60'];
        this.espressoMacchiatoList = ['50', '60', '70', '80'];
        this.coffeeList = ['60', '80', '100', '120', '140', '160', '180', '200', '220', '240', '260'];
        this.capuccinoList = ['100', '120', '140', '160', '180', '200', '220', '240', '260', '280', '300'];
        this.latteMacchiatoList = ['200', '220', '240', '260', '280', '300', '320', '340', '360', '380', '400'];
        this.caffeeLatteList = ['100', '120', '140', '160', '180', '200', '220', '240', '260', '280', '300'];
        console.log(localStorage.getItem('currentId'));
        this.getFavorit();
        console.log(this.favoritProperties);
        this.orderProperties.buyer = localStorage.getItem('currentId');
        this.offeneRechnung();
    }
    FavoritenVerwaltenPage.prototype.offeneRechnung = function () {
        this.blocked = localStorage.getItem('blocked');
        if (this.blocked == "true") {
            this.rechnung = true;
        }
        else {
            this.notBlocked = true;
        }
    };
    FavoritenVerwaltenPage.prototype.action = function () {
        if (this.bestellen == true) {
            this.orderProperties.description = this.favoritProperties.description;
            this.orderProperties.beanAmount = this.favoritProperties.beanAmount;
            this.orderProperties.fillAmount = this.favoritProperties.fillAmount;
            this.bestellenMethod();
        }
        if (this.hasFavorit == true) {
            this.updateFavorit();
        }
        else {
            this.createFavorit();
        }
    };
    FavoritenVerwaltenPage.prototype.createFavorit = function () {
        this.favoritProperties.creator = localStorage.getItem('currentId');
        console.log(this.favoritProperties);
        this.favoritService.createFavorit(this.favoritProperties);
    };
    FavoritenVerwaltenPage.prototype.setFill = function () {
        console.log("Here");
        if (this.favoritProperties.description == "Capuccino") {
            this.listToLoad = this.capuccinoList;
        }
        if (this.favoritProperties.description == "Espresso") {
            this.listToLoad = this.espressoList;
        }
        if (this.favoritProperties.description == "Espresso Macchiato") {
            this.listToLoad = this.espressoMacchiatoList;
        }
        if (this.favoritProperties.description == "Kaffee") {
            this.listToLoad = this.coffeeList;
        }
        if (this.favoritProperties.description == "Latte Macchiato") {
            this.listToLoad = this.latteMacchiatoList;
        }
        if (this.favoritProperties.description == "Milchkaffee") {
            this.listToLoad = this.caffeeLatteList;
        }
    };
    FavoritenVerwaltenPage.prototype.getFavorit = function () {
        var _this = this;
        this.favoritService.getFavorit()
            .subscribe(function (data) {
            if (data.data.length > 0) {
                _this.favoritProperties = data.data[0];
                _this.hasFavorit = true;
                console.log(_this.favoritProperties);
            }
            ;
        });
    };
    FavoritenVerwaltenPage.prototype.updateFavorit = function () {
        this.favoritService.updateFavorit(this.favoritProperties);
    };
    FavoritenVerwaltenPage.prototype.bestellenMethod = function () {
        var _this = this;
        this.orderProperties.date = Date.now();
        this.ordersService.createOrder(this.orderProperties).then(function (result) {
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    FavoritenVerwaltenPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Saving...'
        });
        this.loading.present();
    };
    FavoritenVerwaltenPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    FavoritenVerwaltenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritenVerwaltenPage');
    };
    FavoritenVerwaltenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favoriten-verwalten',template:/*ion-inline-start:"C:\Users\user\Desktop\project\src\pages\favoriten-verwalten\favoriten-verwalten.html"*/'<ion-content title="Favoriten Verwalten" id="page10" style="background-color:#83A09E;">\n   <ion-header>\n  <ion-navbar>\n    <ion-title>\n      <h3>Favorit verwalten\n	  <img class="image" height="40px" src="../imgs/logo.jpg"/></h3>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n    <br><br><br><br><br><p></p><br><br>\n    <div id="favoritenVerwalten-container2">\n      <form (submit)="action()">\n	  \n	  <ion-list>\n		<ion-item>\n		  <ion-label>Kaffeesorte</ion-label>\n		  <ion-select (ionChange) = "setFill()" [(ngModel)]="favoritProperties.description" name="description">\n			<ion-option [selected]="\'Capuccino\' === favoritProperties.description">Capuccino</ion-option>\n			<ion-option [selected]="\'Espresso\' === favoritProperties.description">Espresso</ion-option>\n			<ion-option [selected]="\'Espresso Macchiato\' === favoritProperties.description">Espresso Macchiato</ion-option>\n			<ion-option [selected]="\'Kaffee\' === favoritProperties.description">Kaffee</ion-option>\n			<ion-option  [selected]="\'Latte Macchiato\' === favoritProperties.description">Latte Macchiato</ion-option>\n			<ion-option [selected]="\'Milchkaffee\' === favoritProperties.description">Milchkaffee</ion-option>\n		  </ion-select>\n		</ion-item>\n			\n        <ion-item>\n		  <ion-label>Bohnenmenge</ion-label>\n		  <ion-select [(ngModel)]="favoritProperties.beanAmount" name="beanAmount" >\n			<ion-option value="ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.Mild">Mild (2g)</ion-option>\n			<ion-option value="ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.Normal">Normal(5g)</ion-option>\n			<ion-option value="ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.Strong">Stark (10g)</ion-option>\n			<ion-option value="ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.VeryStrong">Sehr stark (13g)</ion-option>\n			<ion-option value="ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.DoubleShot">Double shot (23g)</ion-option>\n			<ion-option value="ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.DoubleShotPlus">Double shot plus (25g)</ion-option>\n		</ion-select>\n		</ion-item>\n		\n		<ion-item>\n		  <ion-label>Füllmenge</ion-label>\n		  <ion-select  [(ngModel)]="favoritProperties.fillAmount" name="fillAmount" >\n			<ion-option *ngFor="let fill of listToLoad" [value]="fill">{{fill}} Ml</ion-option>\n		  </ion-select>	  \n		</ion-item>\n\n  \n		</ion-list>\n        <div class="spacer" style="width: 300px; height: 18.9844px;"></div>\n		<ion-item *ngIf="notBlocked">\n			<ion-label>Bestellen</ion-label>\n			<ion-checkbox [(ngModel)]="bestellen" name="bestellen"  id="favoritenVerwalten-checkbox30"></ion-checkbox>\n		</ion-item>\n		<ion-item *ngIf="rechnung">\n			<ion-label class="red">Bitte Rechnung zahlen!</ion-label>\n		</ion-item>\n		<div class="spacer" style="width: 300px; height: 10px;"></div>\n        <div id="favoritenVerwalten-button-bar3" class="button-bar">\n          <button ion-button block type="submit" class="submit-btn">Speichern</button>\n        </div>\n      </form>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\project\src\pages\favoriten-verwalten\favoriten-verwalten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_orders_orders__["a" /* OrdersProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_favorit_favorit__["a" /* FavoritProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], FavoritenVerwaltenPage);
    return FavoritenVerwaltenPage;
}());

//# sourceMappingURL=favoriten-verwalten.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KaffeeBestellenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KaffeeBestellenPage = (function () {
    function KaffeeBestellenPage(navCtrl, orderService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.orderService = orderService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.createProperties = { description: '', beanAmount: '', fillAmount: '', price: '2.5', date: Date.now(), buyer: '' };
        this.blocked = localStorage.getItem('blocked');
        this.notBlocked = false;
        this.rechnung = false;
        this.espressoList = ['35', '40', '45', '50', '55', '60'];
        this.espressoMacchiatoList = ['50', '60', '70', '80'];
        this.coffeeList = ['60', '80', '100', '120', '140', '160', '180', '200', '220', '240', '260'];
        this.capuccinoList = ['100', '120', '140', '160', '180', '200', '220', '240', '260', '280', '300'];
        this.latteMacchiatoList = ['200', '220', '240', '260', '280', '300', '320', '340', '360', '380', '400'];
        this.caffeeLatteList = ['100', '120', '140', '160', '180', '200', '220', '240', '260', '280', '300'];
        this.createProperties.buyer = localStorage.getItem('currentId');
        console.log(localStorage.getItem('currentId'));
        this.createProperties.date = Date.now();
        this.listToLoad = this.espressoList;
        this.offeneRechnung();
    }
    KaffeeBestellenPage.prototype.offeneRechnung = function () {
        this.blocked = localStorage.getItem('blocked');
        console.log("this blocked" + this.blocked);
        if (this.blocked == "true") {
            this.rechnung = true;
        }
        else {
            this.notBlocked = true;
        }
    };
    KaffeeBestellenPage.prototype.setFill = function () {
        console.log("Here");
        if (this.createProperties.description == "Capuccino") {
            this.listToLoad = this.capuccinoList;
        }
        if (this.createProperties.description == "Espresso") {
            this.listToLoad = this.espressoList;
        }
        if (this.createProperties.description == "Espresso Macchiato") {
            this.listToLoad = this.espressoMacchiatoList;
        }
        if (this.createProperties.description == "Kaffee") {
            this.listToLoad = this.coffeeList;
        }
        if (this.createProperties.description == "Latte Macchiato") {
            this.listToLoad = this.latteMacchiatoList;
        }
        if (this.createProperties.description == "Milchkaffee") {
            this.listToLoad = this.caffeeLatteList;
        }
    };
    KaffeeBestellenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KaffeeBestellenPage');
    };
    KaffeeBestellenPage.prototype.createOrder = function () {
        var _this = this;
        this.showLoader();
        this.orderService.createOrder(this.createProperties).then(function (result) {
            _this.loading.dismiss();
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    KaffeeBestellenPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    KaffeeBestellenPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    KaffeeBestellenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kaffee-bestellen',template:/*ion-inline-start:"C:\Users\user\Desktop\project\src\pages\kaffee-bestellen\kaffee-bestellen.html"*/'<ion-content title="Kaffee bestellen"  style="background-color:#83A09E;">\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <h3>Kaffee bestellen\n	  <img class="image" height="40px" src="../imgs/logo.jpg"/></h3>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<br><br><br><br><br><p></p><br><br>\n    <form (submit)="createOrder()">\n		<ion-item *ngIf="notBlocked">\n		 <ion-label>Kaffeesorte</ion-label>\n		<ion-select (ionChange) = "setFill()" [(ngModel)]="createProperties.description" name="descrption "> \n				<ion-option value="Capuccino">Capuccino</ion-option>\n				<ion-option value="Espresso">Espresso</ion-option>\n				<ion-option value="Espresso Macchiato">Espresso Macchiato</ion-option>\n				<ion-option value="Kaffee">Kaffee</ion-option>\n				<ion-option value="Latte Macchiato">Latte Macchiato</ion-option>\n				<ion-option value="Milchkaffee">Milchkaffee</ion-option>\n		</ion-select>\n		</ion-item>\n		\n		 <ion-item *ngIf="notBlocked">\n		  <ion-label>Bohnenmenge</ion-label>\n		  <ion-select [(ngModel)]="createProperties.beanAmount" name="beanAmount" >\n			<ion-option value="ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.Mild">Mild (2g)</ion-option>\n			<ion-option value="ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.Normal">Normal(5g)</ion-option>\n			<ion-option value="ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.Strong">Stark (10g)</ion-option>\n			<ion-option value="ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.VeryStrong">Sehr stark (13g)</ion-option>\n			<ion-option value="ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.DoubleShot">Double shot (23g)</ion-option>\n			<ion-option value="ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.DoubleShotPlus">Double shot plus (25g)</ion-option>\n		</ion-select>\n		</ion-item>\n		 \n		<ion-item *ngIf="notBlocked">\n		  <ion-label>Füllmenge</ion-label>\n		  <ion-select  [(ngModel)]="createProperties.fillAmount" name="fillAmount" >\n			<ion-option *ngFor="let fill of listToLoad" [value]="fill">{{fill}} Ml</ion-option>\n		  </ion-select>	  \n		</ion-item>\n		\n		<ion-item *ngIf="rechnung">\n			<ion-label class="red">Bitte Rechnung zahlen!</ion-label>\n		</ion-item>\n		\n	\n      <div class="spacer" style="width: 300px; height: 26px;"></div>\n	   <button *ngIf="notBlocked" ion-button block type="submit" class="submit-btn">Bestellen</button>\n    </form>\n    \n  </ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\project\src\pages\kaffee-bestellen\kaffee-bestellen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__["a" /* OrdersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], KaffeeBestellenPage);
    return KaffeeBestellenPage;
}());

//# sourceMappingURL=kaffee-bestellen.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LagerVerwaltenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_material_material__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_anzeigen_material_anzeigen__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_material_new_material__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LagerVerwaltenPage = (function () {
    function LagerVerwaltenPage(navCtrl, materialService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.materialService = materialService;
        this.loadingCtrl = loadingCtrl;
        this.allMaterials();
    }
    LagerVerwaltenPage.prototype.allMaterials = function () {
        var _this = this;
        this.materials = this.materialService.allMaterials()
            .subscribe(function (data) { _this.materials = data; });
    };
    LagerVerwaltenPage.prototype.showMaterial = function (matId) {
        localStorage.setItem('materialId', matId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__material_anzeigen_material_anzeigen__["a" /* MaterialAnzeigenPage */]);
    };
    LagerVerwaltenPage.prototype.newMaterial = function () {
        localStorage.removeItem('materialId');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__new_material_new_material__["a" /* NewMaterialPage */]);
    };
    LagerVerwaltenPage.prototype.ionViewDidLoad = function (id) {
        console.log('ionViewDidLoad LagerVerwaltenPage');
    };
    LagerVerwaltenPage.prototype.ionViewWillEnter = function () {
        this.allMaterials();
    };
    LagerVerwaltenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lager-verwalten',template:/*ion-inline-start:"C:\Users\user\Desktop\project\src\pages\lager-verwalten\lager-verwalten.html"*/'<ion-content class="page" title="Lagerverwaltung" style="background-color:#83A09E;" >\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <h3>Alle Materialien\n	  <img class="image" height="40px" src="../imgs/logo.jpg"/></h3>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<br><br><p></p><br><br><br><br>\n	<ion-list>\n		<ion-item class="artikel">Artikel</ion-item>\n		<div class="spacer" style="width: 300px; height: 5px;"></div>\n		<ion-item *ngFor = "let material of materials.data">	\n			<ion-label full (click) = "showMaterial(material._id)">{{material.description}}</ion-label>\n		</ion-item>	\n	<ion-item>\n		<ion-label  (click) = "newMaterial()">Neues Material anlegen</ion-label>\n	</ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\project\src\pages\lager-verwalten\lager-verwalten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_material_material__["a" /* MaterialProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LagerVerwaltenPage);
    return LagerVerwaltenPage;
}());

//# sourceMappingURL=lager-verwalten.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMaterialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_material_material__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewMaterialPage = (function () {
    function NewMaterialPage(navCtrl, materialService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.materialService = materialService;
        this.loadingCtrl = loadingCtrl;
        this.material = { description: '', inStock: '', criticalStock: '', ekPrice: '', vkPrice: '' };
    }
    NewMaterialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewMaterialPage');
    };
    NewMaterialPage.prototype.newMaterial = function () {
        this.materialService.newMaterial(this.material);
        localStorage.removeItem('New');
    };
    NewMaterialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-material',template:/*ion-inline-start:"C:\Users\user\Desktop\project\src\pages\new-material\new-material.html"*/'<ion-content padding>\n<ion-header>\n  <ion-navbar>\n    <ion-title><h3>Material Anlegen\n	  <img class="image" height="40px" src="../imgs/logo.jpg"/>\n	  </h3></ion-title>\n  </ion-navbar>\n\n</ion-header>\n<br><br><p></p><br><br>\n\n<form (submit)="newMaterial()">\n	<ion-list>\n		<ion-item>\n			<ion-label stacked full >Beschreibung</ion-label>\n			<ion-input type="text" name="description" [(ngModel)]="material.description"></ion-input>\n		</ion-item> \n		\n		<ion-item>\n			<ion-label stacked full >Verfügbare Menge</ion-label>\n			<ion-input type="text" name="inStock"[(ngModel)] ="material.inStock"></ion-input>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label stacked full >Kritische verfügbare Menge</ion-label>\n			<ion-input type="text" name="criticalStock"[(ngModel)] ="material.criticalStock"></ion-input>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label stacked full >Einkaufspreis</ion-label>\n			<ion-input type="text" name="ekPrice" [(ngModel)]="material.ekPrice"></ion-input>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label stacked full >Verkaufspreis</ion-label>\n			<ion-input type="text" name="vkPrice"[(ngModel)]= "material.vkPrice"></ion-input>\n		</ion-item>\n	</ion-list>\n	\n	<button ion-button type="submit" ng-style="myStyle" name="show" class="submit-btn">Speichern</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\project\src\pages\new-material\new-material.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_material_material__["a" /* MaterialProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NewMaterialPage);
    return NewMaterialPage;
}());

//# sourceMappingURL=new-material.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NfcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NfcPage = (function () {
    function NfcPage(navCtrl, navParams, loadingCtrl, platform, toastCtrl, nfc, ndef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.nfc = nfc;
        this.ndef = ndef;
        this.tagId = "";
        this.readingTag = false;
        this.writingTag = false;
        this.isWriting = false;
        this.writeContent = '';
        this.subscriptions = new Array();
        this.cekNFC();
        console.log("ready");
    }
    NfcPage.prototype.cekNFC = function () {
        var _this = this;
        this.nfc.enabled().then(function () {
            console.log("Enabled");
            _this.addListenNFC();
        });
    };
    NfcPage.prototype.addListenNFC = function () {
        var _this = this;
        this.nfc.addTagDiscoveredListener(function (nfcEvent) { return _this.sesReadNFC(nfcEvent.tag); }).subscribe(function (data) {
            if (data && data.tag && data.tag.id) {
                _this.tagId = _this.nfc.bytesToHexString(data.tag.id);
                if (_this.tagId != '') {
                    console.log("TagID" + _this.tagId);
                }
                else {
                    console.log('NFC_NOT_DETECTED');
                }
            }
        });
    };
    NfcPage.prototype.sesReadNFC = function (data) {
        console.log('NFC_WORKING');
    };
    NfcPage.prototype.failNFC = function (err) {
        console.log('NFC Failed :' + JSON.stringify(err));
    };
    NfcPage.prototype.ionViewWillLeave = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    NfcPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    NfcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NfcPage');
    };
    NfcPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'NFC...'
        });
        this.loading.present();
    };
    NfcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nfc',template:/*ion-inline-start:"C:\Users\user\Desktop\project\src\pages\nfc\nfc.html"*/'<!-- used with <gap:plugin name="com.chariotsolutions.nfc.plugin" /> -->\n<script type="text/javascript" charset="utf-8" src="phonegap-nfc.js"></script>\n<ion-header>\n  <ion-navbar>\n    <ion-title>NFC</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-item>\n		<ion-label stacked full>NFC-Tag Wert</ion-label>\n		<ion-label>{{tagId}}</ion-label>\n	</ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\project\src\pages\nfc\nfc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__["b" /* Ndef */]])
    ], NfcPage);
    return NfcPage;
}());

//# sourceMappingURL=nfc.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechnungAnsehenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RechnungAnsehenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RechnungAnsehenPage = (function () {
    function RechnungAnsehenPage(navCtrl, ordersService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.ordersService = ordersService;
        this.loadingCtrl = loadingCtrl;
        this.orderProperties = { description: '', beanAmount: '', milkAmount: '', date: '', price: '', };
        this.totalPrice = 0;
        this.getRechnung();
    }
    RechnungAnsehenPage.prototype.getRechnung = function () {
        var _this = this;
        this.orders = this.ordersService.getOrder()
            .subscribe(function (data) { _this.orders = data; _this.getSum(data.data); });
    };
    RechnungAnsehenPage.prototype.getSum = function (orders) {
        for (var i = 0; i < orders.length; i++) {
            this.totalPrice = this.totalPrice + parseFloat(orders[i].price);
        }
    };
    RechnungAnsehenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RechnungAnsehenPage');
    };
    RechnungAnsehenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rechnung-ansehen',template:/*ion-inline-start:"C:\Users\user\Desktop\project\src\pages\rechnung-ansehen\rechnung-ansehen.html"*/'<ion-content title="Rechnung ansehen" id="page4" style="background-color:#83A09E;">\n  <ion-content title="Kaffee bestellen"  style="background-color:#83A09E;">\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <h3>Rechnungung Ansehen\n	    <img class="image" height="40px" src="../imgs/logo.jpg"/></h3>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<br><br><p></p><br><br>\n    <div class="spacer" style="width: 300px; height: 29px;"></div>\n    <div id="rechnungAnsehen-button-bar1" class="button-bar"></div>\n    <h4 id="rechnungAnsehen-heading16" style="color:#000000;"></h4>\n\n    <table width="80%" class="abrechnung">\n      <tbody>\n        <tr>\n		  <th>Date</th>\n          <th>Kaffeesorte</th>\n		  <th>Preis</th>\n        </tr>\n        \n        <tr *ngFor = "let order of orders.data">\n		  <td>{{order.date | date:\'dd-MM-yyyy HH:mm:ss\'}}</td>\n          <td>{{order.description}}</td>\n		  <td>{{order.price}} €</td>\n        </tr>\n      </tbody>\n    </table>\n	<div class="spacer" style="width: 300px; height: 29px;"></div>\n	<ion-item  style = "width:95%;margin-left:2.5%;background-color:#e6e6e6;font-weight:bold; font-size:18px !important;">\n		<ion-label stacked>Gesamtpreis: &nbsp;  {{totalPrice}} €</ion-label>\n	</ion-item>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\project\src\pages\rechnung-ansehen\rechnung-ansehen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__["a" /* OrdersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RechnungAnsehenPage);
    return RechnungAnsehenPage;
}());

//# sourceMappingURL=rechnung-ansehen.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/favoriten-verwalten/favoriten-verwalten.module": [
		288,
		5
	],
	"../pages/kaffee-bestellen/kaffee-bestellen.module": [
		289,
		4
	],
	"../pages/lager-verwalten/lager-verwalten.module": [
		290,
		3
	],
	"../pages/new-material/new-material.module": [
		291,
		2
	],
	"../pages/nfc/nfc.module": [
		292,
		1
	],
	"../pages/rechnung-ansehen/rechnung-ansehen.module": [
		293,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://iot-hackathon.herokuapp.com/fav-products';
var FavoritProvider = (function () {
    function FavoritProvider(http) {
        this.http = http;
    }
    FavoritProvider.prototype.createFavorit = function (favorit) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', localStorage.getItem('token'));
            _this.http.post(apiUrl, JSON.stringify(favorit), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    FavoritProvider.prototype.getFavorit = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('token'));
        return this.http.get(apiUrl + '/?creator=' + localStorage.getItem('currentId'), { headers: headers }).map(function (res) { return res.json(); });
    };
    FavoritProvider.prototype.updateFavorit = function (favorit) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', localStorage.getItem('token'));
            _this.http.patch(apiUrl, JSON.stringify(favorit), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    FavoritProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], FavoritProvider);
    return FavoritProvider;
}());

//# sourceMappingURL=favorit.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialAnzeigenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_material_material__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialAnzeigenPage = (function () {
    function MaterialAnzeigenPage(navCtrl, materialService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.materialService = materialService;
        this.loadingCtrl = loadingCtrl;
        this.material = { description: '', inStock: '', criticalStock: '', ekPrice: '', vkPrice: '' };
        this.details();
    }
    MaterialAnzeigenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaterialAnzeigenPage');
    };
    MaterialAnzeigenPage.prototype.details = function () {
        var _this = this;
        this.materialService.getMaterial()
            .subscribe(function (data) {
            _this.material = (data.data)[0];
            _this.id = (data.data)[0]._id;
            console.log(_this.material);
        });
    };
    MaterialAnzeigenPage.prototype.updateMaterial = function () {
        console.log(this.id);
        this.materialService.updateMaterial(this.id, this.material);
    };
    MaterialAnzeigenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-material-anzeigen',template:/*ion-inline-start:"C:\Users\user\Desktop\project\src\pages\material-anzeigen\material-anzeigen.html"*/'<ion-content padding>\n<ion-header>\n  <ion-navbar>\n    <ion-title><h3>Material "{{material.description}}"\n		<img class="image" height="40px" src="../imgs/logo.jpg"/>\n	  </h3>\n	  </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<br><br><p></p><br><br>\n<form (submit)="updateMaterial()">\n	<ion-list>\n		<ion-item>\n			<ion-label stacked full >Beschreibung</ion-label>\n			<ion-input type="text" name="description" [(ngModel)]="material.description"></ion-input>\n		</ion-item> \n		\n		<ion-item>\n			<ion-label stacked full >Verfügbare Menge</ion-label>\n			<ion-input type="text" name="inStock"[(ngModel)] ="material.inStock"></ion-input>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label stacked full >Kritische verfügbare Menge</ion-label>\n			<ion-input type="text" name="criticalStock"[(ngModel)] ="material.criticalStock"></ion-input>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label stacked full >Einkaufspreis</ion-label>\n			<ion-input type="text" name="ekPrice" [(ngModel)]="material.ekPrice"></ion-input>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label stacked full >Verkaufspreis</ion-label>\n			<ion-input type="text" name="vkPrice"[(ngModel)]= "material.vkPrice"></ion-input>\n		</ion-item>\n	</ion-list>\n	\n	<button ion-button type="submit" ng-style="myStyle" name="show" class="submit-btn">Speichern</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\project\src\pages\material-anzeigen\material-anzeigen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_material_material__["a" /* MaterialProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MaterialAnzeigenPage);
    return MaterialAnzeigenPage;
}());

//# sourceMappingURL=material-anzeigen.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kaffee_bestellen_kaffee_bestellen__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rechnung_ansehen_rechnung_ansehen__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favoriten_verwalten_favoriten_verwalten__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lager_verwalten_lager_verwalten__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_verwaltung_user_verwaltung__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nfc_nfc__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, navParams, menuCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.admin = false;
        this.userName = localStorage.getItem('userName');
        this.role();
    }
    HomePage.prototype.kaffeeBestellen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__kaffee_bestellen_kaffee_bestellen__["a" /* KaffeeBestellenPage */]);
    };
    HomePage.prototype.rechnungAnsehen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__rechnung_ansehen_rechnung_ansehen__["a" /* RechnungAnsehenPage */]);
    };
    HomePage.prototype.favoritVerwalten = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__favoriten_verwalten_favoriten_verwalten__["a" /* FavoritenVerwaltenPage */]);
    };
    HomePage.prototype.lagerVerwalten = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__lager_verwalten_lager_verwalten__["a" /* LagerVerwaltenPage */]);
    };
    HomePage.prototype.userVerwalten = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_verwaltung_user_verwaltung__["a" /* UserVerwaltungPage */]);
    };
    HomePage.prototype.nfc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__nfc_nfc__["a" /* NfcPage */]);
    };
    HomePage.prototype.role = function () {
        if (localStorage.getItem('role') == 'admin') {
            this.admin = true;
        }
    };
    HomePage.prototype.logout = function () {
        this.menuCtrl.close();
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\user\Desktop\project\src\pages\home\home.html"*/'<ion-content class="home-content" padding>\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <h3>Übersicht\n	  <img class="image" height="40px" src="../imgs/logo.jpg"/></h3>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<div class="spacer" style="width: 300px; height: 100px;"></div>\n	<h3><p style="color:white; margin-left:2.5%;">Herr/Frau {{userName}}</p></h3>\n	<ion-list>\n		<ion-item>	\n			<ion-label full (click)="kaffeeBestellen()">Kaffee  bestellen</ion-label>\n		</ion-item>	\n		<div class="spacer" style="width: 300px; height: 1px;"></div>\n		<ion-item>	\n			<ion-label full (click)="rechnungAnsehen()">Rechnung ansehen</ion-label>\n		</ion-item>	\n		<div class="spacer" style="width: 300px; height: 1px;"></div>\n		<ion-item>	\n			<ion-label full (click)="favoritVerwalten()">Favorit verwalten</ion-label>\n		</ion-item>	\n		<div *ngIf="admin" class="spacer" style="width: 300px; height: 1px;"></div>\n		<ion-item *ngIf="admin">	\n			<ion-label full (click)="lagerVerwalten()">Lager  verwalten</ion-label>\n		</ion-item>	\n		<div *ngIf="admin"  class="spacer" style="width: 300px; height: 1px;"></div>\n		<ion-item *ngIf="admin">	\n			<ion-label full (click)="userVerwalten()">Users  verwalten</ion-label>\n		</ion-item>		\n		<div class="spacer" style="width: 300px; height: 1px;"></div>\n		<ion-item>	\n			<ion-label full (click)="nfc()">NFC</ion-label>\n		</ion-item>	\n		<div class="spacer" style="width: 300px; height: 50px;"></div>\n		<ion-item class="logout">	\n			<ion-label full (click)="logout()" class="logout">Logout</ion-label>\n		</ion-item>	\n			\n	</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\project\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserVerwaltungPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_anzeigen_user_anzeigen__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserVerwaltungPage = (function () {
    function UserVerwaltungPage(navCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.regData = { name: '', email: '', password: '', rfid: '', voiceId: '', role: '', blocked: false };
        this.regData.role = "user";
        this.getUsers();
    }
    UserVerwaltungPage.prototype.doRegister = function () {
        this.authService.register(this.regData);
        this.getUsers();
    };
    UserVerwaltungPage.prototype.getUsers = function () {
        var _this = this;
        this.users = this.authService.getAllUsers()
            .subscribe(function (data) { _this.users = data; });
    };
    UserVerwaltungPage.prototype.goToShowUser = function (user) {
        localStorage.setItem('otherUserId', user._id);
        console.log("Ici " + localStorage.getItem('otherUserId'));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_anzeigen_user_anzeigen__["a" /* UserAnzeigenPage */]);
    };
    UserVerwaltungPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    UserVerwaltungPage.prototype.ionViewWillEnter = function () {
        this.getUsers();
        console.log("I am back");
    };
    UserVerwaltungPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UserVerwaltungPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-verwaltung',template:/*ion-inline-start:"C:\Users\user\Desktop\project\src\pages\user-verwaltung\user-verwaltung.html"*/'<ion-content title="Userverwaltung" id="page15" style="background-color:#83A09E;">\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <h3>Userverwaltung\n	   <img class="image" height="40px" src="../imgs/logo.jpg"/></h3>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n  <ion-content padding="true" scroll="true" class="has-header">\n    <ion-slides disable-side-menu-drag="" options="{\'loop\': true}" slider="slider7" style="width:100%;height:100%;">\n      <ion-slide id="userverwaltung-slide213" style="background-color:#83A09E;">\n        <div id="userverwaltung-container13">\n			<div class="spacer" style="width: 300px; height: 10px;"></div>\n          <h3 id="userverwaltung-heading17" style="color:#000000;">User anlegen</h3>\n          <div class="spacer" style="width: 300px; height: 10px;"></div>\n          <form (submit)="doRegister()">\n			<ion-list>\n				<ion-item>\n					<ion-label>Name</ion-label>\n					 <ion-input [(ngModel)]="regData.name" name="name" type="text" placeholder="Name" ></ion-input>\n				</ion-item>\n				<div class="spacer" style="width: 300px; height: 5px;"></div>\n				<ion-item>\n					<ion-label>Email</ion-label>\n					 <ion-input [(ngModel)]="regData.email" name="email" type="text" placeholder="Email" ></ion-input>\n				</ion-item>\n				<div class="spacer" style="width: 300px; height: 5px;"></div>\n				<ion-item>\n					<ion-label>Passwort</ion-label>\n					 <ion-input [(ngModel)]="regData.password" name="password" type="password" placeholder="Passwort" ></ion-input>\n				</ion-item>\n				<div class="spacer" style="width: 300px; height: 5px;"></div>\n				<ion-item>\n					<ion-label>RFID</ion-label>\n					 <ion-input [(ngModel)]="regData.rfid" name="rfid" type="text" placeholder="RFID" ></ion-input>\n				</ion-item>\n				<div class="spacer" style="width: 300px; height: 5px;"></div>\n				<ion-item>\n					<ion-label>Voice ID</ion-label>\n					 <ion-input [(ngModel)]="regData.voiceid" name="voiceid" type="text" placeholder="Voice ID" ></ion-input>\n				</ion-item>\n				<div class="spacer" style="width: 300px; height: 5px;"></div>\n				<ion-item>\n					<ion-label>Admin</ion-label>\n					<ion-toggle [(ngModel)]="regData.role" name="role">Admin</ion-toggle>\n				</ion-item>\n            <div class="spacer" style="width: 300px; height: 10px;"></div>\n		 </ion-list>\n        <button ion-button block type="submit" class="submit-btn">Speichern</button>\n		</form>\n        </div>\n      </ion-slide>\n      <ion-slide id="userverwaltung-slide214" style="background-color:#83A09E;">\n		<div class="spacer" style="width: 300px; height: 10px;"></div>\n        <h3 id="userverwaltung-heading18" style="color:#000000;" class="marginClass">Users Anzeigen</h3>\n        <div id="userverwaltung-container12">       \n            <div class="spacer" style="width: 300px; height: 10px;"></div>\n			<ion-list>\n				<ion-item *ngFor="let user of users.data">	\n					<ion-label full (click)="goToShowUser(user)">{{user.name}}</ion-label>\n				</ion-item>\n				<div class="spacer" style="width: 300px; height: 1px;"></div>\n			</ion-list>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\project\src\pages\user-verwaltung\user-verwaltung.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], UserVerwaltungPage);
    return UserVerwaltungPage;
}());

//# sourceMappingURL=user-verwaltung.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAnzeigenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserAnzeigenPage = (function () {
    function UserAnzeigenPage(navCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.user = { _id: '', name: '', email: '', rfid: '', voiceId: '', role: '', blocked: false };
        this.showUser();
    }
    UserAnzeigenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserAnzeigenPage');
    };
    UserAnzeigenPage.prototype.showUser = function () {
        var _this = this;
        this.authService.getUser(localStorage.getItem('otherUserId'))
            .subscribe(function (data) {
            _this.user = data.data[0];
            console.log(_this.user);
        });
    };
    UserAnzeigenPage.prototype.onChange = function () {
        if (this.user.blocked == false) {
            this.user.blocked = true;
        }
        else {
            this.user.blocked = false;
        }
    };
    UserAnzeigenPage.prototype.updateUser = function () {
        console.log(this.user._id);
        this.authService.updateUser(this.user._id, this.user);
    };
    UserAnzeigenPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UserAnzeigenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-anzeigen',template:/*ion-inline-start:"C:\Users\user\Desktop\project\src\pages\user-anzeigen\user-anzeigen.html"*/'<ion-content title="UserAnzeigen" id="page15" style="background-color:#83A09E;">\n	<ion-header>\n	  <ion-navbar>\n		<ion-title>\n		  <h3>User ändern\n		     <img class="image" height="40px" src="../imgs/logo.jpg"/></h3>\n		</ion-title>\n	  </ion-navbar>\n	</ion-header>\n<form (submit)="updateUser()">\n<br><br><br><br>\n	<ion-list>\n		<ion-item >	\n			<ion-label stacked full>Name</ion-label>\n			<ion-input type="text" name="name"[(ngModel)]="user.name"></ion-input>\n		</ion-item>\n		<ion-item >	\n			<ion-label stacked full>Email</ion-label>\n			<ion-input type="text" name="email"[(ngModel)]="user.email"></ion-input>\n		</ion-item>\n		<ion-item>	\n			<ion-label stacked full>RFID</ion-label>\n			<ion-input type="text" name="rfid"[(ngModel)]="user.rfid"></ion-input>\n		</ion-item>\n		<ion-item>	\n			<ion-label stacked full>Voice Id</ion-label>\n			<ion-input type="text" name="voiceId"[(ngModel)]="user.voiceId"></ion-input>\n		</ion-item>\n		<ion-item>	\n			<ion-label stacked full>Role</ion-label>\n			<ion-select [(ngModel)]="user.role" name="role" >\n				<ion-option value="user">User</ion-option>\n				<ion-option value="admin">Admin</ion-option>\n			</ion-select>\n		</ion-item>\n		 <div class="spacer" style="width: 300px; height: 10px;"></div>\n		<ion-item>	\n			<ion-label stacked full>Gesperrt</ion-label>\n			<ion-toggle [(ngModel)]="user.blocked"  (change)="onChange()"  name="blocked"></ion-toggle>\n		</ion-item>\n	</ion-list>\n	<div class="spacer" style="width: 300px; height: 10px;"></div>\n	 <button ion-button block type="submit" class="submit-btn">Speichern</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\project\src\pages\user-anzeigen\user-anzeigen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], UserAnzeigenPage);
    return UserAnzeigenPage;
}());

//# sourceMappingURL=user-anzeigen.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_kaffee_bestellen_kaffee_bestellen__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_anzeigen_user_anzeigen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_verwaltung_user_verwaltung__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_rechnung_ansehen_rechnung_ansehen__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_favoriten_verwalten_favoriten_verwalten__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lager_verwalten_lager_verwalten__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_material_anzeigen_material_anzeigen__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_new_material_new_material__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_nfc_nfc__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_nfc__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_orders_orders__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_favorit_favorit__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_material_material__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_kaffee_bestellen_kaffee_bestellen__["a" /* KaffeeBestellenPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_material_anzeigen_material_anzeigen__["a" /* MaterialAnzeigenPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_new_material_new_material__["a" /* NewMaterialPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_rechnung_ansehen_rechnung_ansehen__["a" /* RechnungAnsehenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_favoriten_verwalten_favoriten_verwalten__["a" /* FavoritenVerwaltenPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lager_verwalten_lager_verwalten__["a" /* LagerVerwaltenPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user_anzeigen_user_anzeigen__["a" /* UserAnzeigenPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_verwaltung_user_verwaltung__["a" /* UserVerwaltungPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_nfc_nfc__["a" /* NfcPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/favoriten-verwalten/favoriten-verwalten.module#FavoritenVerwaltenPageModule', name: 'FavoritenVerwaltenPage', segment: 'favoriten-verwalten', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kaffee-bestellen/kaffee-bestellen.module#KaffeeBestellenPageModule', name: 'KaffeeBestellenPage', segment: 'kaffee-bestellen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lager-verwalten/lager-verwalten.module#LagerVerwaltenPageModule', name: 'LagerVerwaltenPage', segment: 'lager-verwalten', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-material/new-material.module#NewMaterialPageModule', name: 'NewMaterialPage', segment: 'new-material', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nfc/nfc.module#NfcPageModule', name: 'NfcPage', segment: 'nfc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rechnung-ansehen/rechnung-ansehen.module#RechnungAnsehenPageModule', name: 'RechnungAnsehenPage', segment: 'rechnung-ansehen', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user_anzeigen_user_anzeigen__["a" /* UserAnzeigenPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_verwaltung_user_verwaltung__["a" /* UserVerwaltungPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_kaffee_bestellen_kaffee_bestellen__["a" /* KaffeeBestellenPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_rechnung_ansehen_rechnung_ansehen__["a" /* RechnungAnsehenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_favoriten_verwalten_favoriten_verwalten__["a" /* FavoritenVerwaltenPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lager_verwalten_lager_verwalten__["a" /* LagerVerwaltenPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_material_anzeigen_material_anzeigen__["a" /* MaterialAnzeigenPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_new_material_new_material__["a" /* NewMaterialPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_nfc_nfc__["a" /* NfcPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_nfc__["a" /* NFC */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_nfc__["b" /* Ndef */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_orders_orders__["a" /* OrdersProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_favorit_favorit__["a" /* FavoritProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_material_material__["a" /* MaterialProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, nfc, ndef) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\user\Desktop\project\src\app\app.html"*/'<ion-menu [content]="content">\n	<ion-content padding>\n		<p>Barista</p>\n	</ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"C:\Users\user\Desktop\project\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["b" /* Ndef */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://iot-hackathon.herokuapp.com/orders';
var OrdersProvider = (function () {
    function OrdersProvider(http) {
        this.http = http;
    }
    OrdersProvider.prototype.createOrder = function (propertiesCreate) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        return new Promise(function (resolve, reject) {
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', localStorage.getItem('token'));
            _this.http.post(apiUrl, JSON.stringify(propertiesCreate), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    OrdersProvider.prototype.getOrders = function (propertiesGet) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        return new Promise(function (resolve, reject) {
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', localStorage.getItem('token'));
            _this.http.post(apiUrl, JSON.stringify(propertiesGet), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    OrdersProvider.prototype.getOrder = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('token'));
        return this.http.get(apiUrl + '?buyer=' + localStorage.getItem('currentId'), { headers: headers }).map(function (res) { return res.json(); });
    };
    OrdersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], OrdersProvider);
    return OrdersProvider;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://iot-hackathon.herokuapp.com/materials';
var MaterialProvider = (function () {
    function MaterialProvider(http) {
        this.http = http;
    }
    MaterialProvider.prototype.allMaterials = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('token'));
        return this.http.get(apiUrl, { headers: headers }).map(function (res) { return res.json(); });
    };
    MaterialProvider.prototype.getMaterial = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('token'));
        console.log("Here Material" + localStorage.getItem('materialId'));
        return this.http.get(apiUrl + '?_id=' + localStorage.getItem('materialId'), { headers: headers }).map(function (res) { return res.json(); });
    };
    MaterialProvider.prototype.newMaterial = function (newMat) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', localStorage.getItem('token'));
            _this.http.post(apiUrl, JSON.stringify(newMat), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    MaterialProvider.prototype.updateMaterial = function (id, mat) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Authorization', localStorage.getItem('token'));
        headers.append('Content-Type', 'application/json');
        console.log(JSON.stringify(mat));
        var url = apiUrl + '/' + id;
        this.http.patch(url, JSON.stringify(mat), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (err) { return console.log(err); });
    };
    MaterialProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], MaterialProvider);
    return MaterialProvider;
}());

//# sourceMappingURL=material.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://iot-hackathon.herokuapp.com';
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        return new Promise(function (resolve, reject) {
            headers.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + '/authentication', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.currentId = function (credentials) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('token'));
        return this.http.get(apiUrl + '/users?email=' + (credentials.email), { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthServiceProvider.prototype.register = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', localStorage.getItem('token'));
            if (data.role == true) {
                data.role = 'admin';
            }
            else {
                data.role = 'user';
            }
            _this.http.post(apiUrl + '/users', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.getUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('token'));
        return this.http.get(apiUrl + '/users?_id=' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthServiceProvider.prototype.getAllUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('token'));
        return this.http.get(apiUrl + '/users', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthServiceProvider.prototype.updateUser = function (otherId, toUpdateUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Authorization', localStorage.getItem('token'));
        headers.append('Content-Type', 'application/json');
        console.log(JSON.stringify(toUpdateUser));
        var url = apiUrl + '/users/' + otherId;
        this.http.patch(url, JSON.stringify(toUpdateUser), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (err) { return console.log(err); });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map