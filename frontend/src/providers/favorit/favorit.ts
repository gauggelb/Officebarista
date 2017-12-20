import { Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


let apiUrl = 'https://iot-hackathon.herokuapp.com/fav-products';

@Injectable()
export class FavoritProvider {

  constructor(public http: Http) {  }
  
   createFavorit(favorit) {
    return new Promise((resolve, reject) => {
	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', localStorage.getItem('token'));
        this.http.post(apiUrl, JSON.stringify(favorit), {headers:headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
  
  getFavorit(){
	var headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', localStorage.getItem('token'));
	return this.http.get(apiUrl+'/?creator='+localStorage.getItem('currentId'), {headers: headers}).map( res => res.json());
  }
  
  updateFavorit(favorit){
	return new Promise((resolve, reject) => {
	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', localStorage.getItem('token'));
        this.http.patch(apiUrl, JSON.stringify(favorit), {headers:headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

}
