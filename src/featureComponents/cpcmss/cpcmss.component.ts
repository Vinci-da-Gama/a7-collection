import { Component } from '@angular/core';
import * as moment from 'moment';
import { StaticInjector } from '@angular/core/src/di/injector';

@Component({
	selector: 'app-cpcmss',
	templateUrl: './cpcmss.component.html',
	styleUrls: ['./cpcmss.component.scss']
})
export class CpcmssComponent {

	dateNow: String = '';
	date7After: String = '';

	constructor() {
		// moment method one
		const now = moment();
		console.log('hello world', now.format());
		this.dateNow = now.format();
		this.date7After = now.add(7, 'days').format();

		// moment method 2 -- import moment inside ctor, not import outside.
		/* const moment = require('moment');
		const now = moment();
		console.log('hello world', now.format());
		console.log(now.add(7, 'days').format()); */
	}

	onClickedOutside(e: Event) {
		console.log('Clicked outside:', e);
		alert(`waht is your click out action -- ${e.type}.`);
	}

}
