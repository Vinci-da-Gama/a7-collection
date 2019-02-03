import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { FbAuthService } from './auth/fb-auth.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

	constructor(
		private fbService: FbAuthService
	) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// usually after multiple time CRUD, data may be damaged, so use clone.
		/* const reqClone = req.clone({
			headers: req.headers.set('', '') // you also has append method.
		}); */
		const reqClone = req.clone({
			params: req.params.set('auth', this.fbService.getFbToken())
		});
		console.log('22 -- interceptor for token: ', reqClone);
		return next.handle(reqClone);
	}

}
