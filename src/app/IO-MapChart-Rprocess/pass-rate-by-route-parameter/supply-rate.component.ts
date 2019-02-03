import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-supply-rate',
	templateUrl: './supply-rate.component.html',
	styleUrls: ['./supply-rate.component.scss']
})
export class SupplyRateComponent implements OnInit {

	passinRate: Number = 0;

	constructor(
		private actRoute: ActivatedRoute
	) {
		this.actRoute.params
			.subscribe((params) => {
				this.passinRate = Number(params['rate']);
			})
	}

	ngOnInit() { }

	leaveIt() {
		alert(`the rate is: ${this.passinRate}. The only purpose is pass it by using route parameters.`);
	}

}
