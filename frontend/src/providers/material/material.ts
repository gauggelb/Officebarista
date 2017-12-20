import { Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



let apiUrl = 'https://iot-hackathon.herokuapp.com/materials'; 
@Injectable()
export class MaterialProvider {

  constructor(public http: Http) {}
  
   allMaterials() {  
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', localStorage.getItem('token'));
		return this.http.get(apiUrl , {headers: headers}).map( res => res.json());
	}
	
	getMaterial() {  
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', localStorage.getItem('token'));
		console.log("Here Material" + localStorage.getItem('materialId')); 
		return this.http.get(apiUrl+'?_id='+ localStorage.getItem('materialId') , {headers: headers}).map( res => res.json());
	}
	
	newMaterial(newMat){
		return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
		headers.append('Authorization', localStorage.getItem('token'));
        this.http.post(apiUrl, JSON.stringify(newMat), {headers: headers}) 
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
	} 
  
  
	updateMaterial(id, mat){	 
	 var headers = new Headers();
		headers.append('Authorization', localStorage.getItem('token'));
		headers.append('Content-Type', 'application/json');
		console.log(JSON.stringify(mat));
		var url = apiUrl+'/'+id;
		this.http.patch(url, JSON.stringify(mat), { headers: headers })
			.map(res => res.json())
			.subscribe(
				err => console.log(err)
			);
			
			
  }
	
	}


