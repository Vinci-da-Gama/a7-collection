import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class CrudService {

	private url = 'https://api.myjson.com/bins/1c8epv';

	constructor(
		private httpCli: HttpClient
	) { }

	getMenu() {
		return this.httpCli.get(this.url, {
			observe: 'response',
			responseType: 'json'
		});
	}

	getForEvent() {
		return this.httpCli.get(this.url, {
			observe: 'events'
		});
	}

	// example only
	getForHttpHeaderSetting() {
		// const theHeader: new HttpHeaders().set('Authorization', 'Bearer asdfasdfdsdf');
		return this.httpCli.get(this.url, {
			observe: 'events'/* ,
			headers: theHeader */
		});
	}

	// example only
	getForParams() {
		// const token = this.authService.GetToken();
		const token = 'asdfadfadf';
		return this.httpCli.get('url', {
			observe: 'body',
			params: new HttpParams().set('auth', token)
		});
	}

	// the correct way to do http in angular5 is HttpRequest for CRUD all with progress
	getForHttpRequestNProgress() {
		const token = 'asdfadfadf';
		/* const req = new HttpRequest('GET', this.url, otherservices_function_ForUpdateData, {
			reportProgress: true, params: new HttpParams().set('auth', token)
		}); */
		const req = new HttpRequest('GET', this.url, {
			reportProgress: true/* , params: new HttpParams().set('auth', token) */
		});
		return this.httpCli.request(req);
	}

}
