import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AsyncObsPromiseBoolInterface } from '../../contracts/interfaces/async-obspromise-interface';

@Injectable()
export class CanDeactivateService implements CanDeactivate<AsyncObsPromiseBoolInterface> {

	canDeactivate(
		compo: AsyncObsPromiseBoolInterface,
		currRoute: ActivatedRouteSnapshot,
		currState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		const isDeactivate = compo.canDeactivate();
		console.log('17 -- whether deactivate? ', isDeactivate);
		return isDeactivate;
	}

}
