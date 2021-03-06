import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
	selector: 'musaxi-notfound-page',
	templateUrl: './notfound-page.component.html',
	styleUrls: ['./notfound-page.component.scss']
})
export class NotfoundPageComponent implements OnInit {

	errMsg: String = '';

	constructor(
		private aRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this.aRoute.data.subscribe((msg: Data) => {
			if (msg) {
				this.errMsg = msg['message'];
			}
		});
	}

}
