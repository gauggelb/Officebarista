import { Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

let apiUrl = 'https://iot-hackathon.herokuapp.com';


@Injectable()
export class AuthServiceProvider {

 constructor(public http: Http) {}

login(credentials) {
	var headers = new Headers();
    return new Promise((resolve, reject) => {
        headers.append('Content-Type', 'application/json');
        this.http.post(apiUrl+'/authentication', JSON.stringify(credentials), {headers:headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
   });
 }

  currentId(credentials){
	 let headers = new Headers();
	  headers.append('Content-Type', 'application/json');
		headers.append('Authorization', localStorage.getItem('token'));
      return this.http.get(apiUrl+'/users?email='+(credentials.email), {headers: headers}).map( res => res.json()); 
  }
  register(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
		headers.append('Authorization', localStorage.getItem('token'));
		if(data.role == true){
			data.role = 'admin';
		}else{
			data.role = 'user';
		}
        this.http.post(apiUrl+'/users', JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
  
  getUser(id){
	var headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', localStorage.getItem('token'));
	return this.http.get(apiUrl+'/users?_id='+id , {headers: headers}).map( res => res.json());
  }
  
  

  getAllUsers() {  
	var headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', localStorage.getItem('token'));
	return this.http.get(apiUrl+'/users' , {headers: headers}).map( res => res.json());
	}
 
	 updateUser(otherId, toUpdateUser){	 
	 var headers = new Headers();
		headers.append('Authorization', localStorage.getItem('token'));
		headers.append('Content-Type', 'application/json');
		console.log(JSON.stringify(toUpdateUser));
		var url = apiUrl+'/users/'+otherId;
		this.http.patch(url, JSON.stringify(toUpdateUser), { headers: headers })
			.map(res => res.json())
			.subscribe(
				err => console.log(err)
			);
			
			
  }
 
}