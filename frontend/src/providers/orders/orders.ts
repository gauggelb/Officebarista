import { Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


let apiUrl = 'https://iot-hackathon.herokuapp.com/orders';



@Injectable()
export class OrdersProvider {

  
 constructor(public http: Http) {}
 
 createOrder(propertiesCreate) {
	var headers = new Headers();
    return new Promise((resolve, reject) => {
        headers.append('Content-Type', 'application/json');
		headers.append('Authorization', localStorage.getItem('token'));
        this.http.post(apiUrl, JSON.stringify(propertiesCreate), {headers:headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
  
   getOrders(propertiesGet) {
	var headers = new Headers();
    return new Promise((resolve, reject) => {
        headers.append('Content-Type', 'application/json');
		headers.append('Authorization', localStorage.getItem('token'));
        this.http.post(apiUrl, JSON.stringify(propertiesGet), {headers:headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
  
   getOrder() {
	var headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', localStorage.getItem('token'));
	return this.http.get(apiUrl+'?buyer='+localStorage.getItem('currentId'), {headers: headers}).map( res => res.json());
  }

}
