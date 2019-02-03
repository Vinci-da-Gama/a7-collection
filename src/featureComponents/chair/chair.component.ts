import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ChairInterface } from '../../contracts/interfaces/chair-interface';
import { ChairsService } from '../../services/chairs/chairs.service';
import { Data } from '@agm/core/services/google-maps-types';

@Component({
	selector: 'app-chair',
	templateUrl: './chair.component.html',
	styleUrls: ['./chair.component.scss']
})
export class ChairComponent implements OnInit {

	currChair: ChairInterface = {
		id: 0,
		name: '',
		status: ''
	};

	constructor(
		private aRoute: ActivatedRoute,
		private router: Router,
		private cService: ChairsService
	) { }

	ngOnInit() {
		this.aRoute.data.subscribe((resolveData: Data) => {
			this.currChair = resolveData['theChair'];
			console.log('resolved chair: ', this.currChair);
		});
		/* this.aRoute.params.subscribe((params: Params) => {
			const chairId = +params['id'];
			if (chairId >= 1) {
				this.currChair = this.cService.getChairById(chairId);
			} else {
				this.currChair.id = 0;
				this.currChair.name = '';
				this.currChair.status = '';
			}
		}); */
		/* this.aRoute.queryParams.subscribe((queryParams: Params) => {
			console.log(queryParams);
		});
		this.aRoute.fragment.subscribe((frag: string) => {
			console.log(frag);
		}); */
	}

	goEditChair() {
		this.router.navigate(['edit'], {
			relativeTo: this.aRoute,
			queryParamsHandling: 'preserve'
		});
	}

}
