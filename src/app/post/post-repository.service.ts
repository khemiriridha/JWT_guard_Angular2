import { Injectable } from '@angular/core';
 
import { AuthHttp } from 'angular2-jwt';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class PostRepository {

  constructor(private authHttp: AuthHttp) {}

  getList() {
		let url = 'http://127.0.0.1:8000/api';
		let headers = new Headers({ 'Content-Type': 'application', });
		
		headers.append('Authorization: bearer', localStorage.getItem('id_token'));
		let options = new RequestOptions({ headers: headers});
		options.withCredentials = true; 
		let response = this.authHttp
		  .get(url)
		  .map((data: Response) => data.json());
		  console.log(response);	  
		return response;
  }
}
