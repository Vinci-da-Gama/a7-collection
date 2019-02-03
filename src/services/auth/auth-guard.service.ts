import { Injectable } from '@angular/core';
import {
	CanLoad, CanActivate, CanActivateChild,
	ActivatedRouteSnapshot, RouterStateSnapshot, Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { FbAuthService } from './fb-auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

	constructor(
		private fbAuthService: FbAuthService,
		private router: Router
	) { }

	canLoad(
		routeSnap: ActivatedRouteSnapshot,
		stateSnap: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		// this will cause only login person can go to lazy child route.
		// return this.canActivate(routeSnap, stateSnap);
		// always allow going to lazy child route.
		return true;
	}

	canActivate(
		routeSnap: ActivatedRouteSnapshot,
		stateSnap: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.fbAuthService.isAuthenticated()
			.then(
				(authen: boolean) => {
					console.log('25: if login is false, redirect to home page.', authen);
					if (authen) {
						return true;
					} else {
						this.router.navigate(['/']);
						return false;
					}
				}
			);
	}

	canActivateChild(
		routeSnap: ActivatedRouteSnapshot,
		stateSnap: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate(routeSnap, stateSnap);
	}

}
