import { Component, OnInit } from '@angular/core';

import { ChairInterface } from '../../contracts/interfaces/chair-interface';
import { ChairsService } from '../../services/chairs/chairs.service';
import { AuthGuardService } from '../../services/auth/auth-guard.service';

@Component({
	selector: 'app-chairs',
	templateUrl: './chairs.component.html',
	styleUrls: ['./chairs.component.scss']
})
export class ChairsComponent implements OnInit {

	chairsData: ChairInterface[];

	constructor(
		private cService: ChairsService,
		private authService: AuthGuardService
	) { }

	ngOnInit() {
		this.chairsData = this.cService.fetchChairs();
	}

}
