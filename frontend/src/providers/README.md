# Providers

Providers are services responsible of transporting the data from pages to backend and from backend to pages with http calls. 
To be sent to the backend, the data must first be in the Json format, have the right headers (access token, content-type), 
use the right method (post, patch, ...) and send the adapted parameter  to get the right data. For example sending user's id as 
paramter to get the right informations about him.
´´´
 getUser(id){
	var headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', localStorage.getItem('token'));
	return this.http.get(apiUrl+'/users?_id='+id , {headers: headers}).map( res => res.json());
  }  
  
´´´
