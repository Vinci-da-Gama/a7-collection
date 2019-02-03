import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ChairInterface } from '../../contracts/interfaces/chair-interface';
import { ChairsService } from './chairs.service';

@Injectable()
export class ChairResolveService implements Resolve<ChairInterface> {

	constructor(
		private cService: ChairsService
	) { }

	resolve(
		currRoute: ActivatedRouteSnapshot,
		currState: RouterStateSnapshot
	): Observable<ChairInterface> | Promise<ChairInterface> | ChairInterface {
		const chair = this.cService.getChairById(+currRoute.params['id']);
		return chair;
	}

}
