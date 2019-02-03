import { Component, Input } from '@angular/core';

import { RoundprogressClass } from '../../contracts/models/roundprogress-class';

@Component({
	selector: 'app-semicircle-roundprogress',
	templateUrl: './semicircle-roundprogress.component.html',
	styleUrls: ['./semicircle-roundprogress.component.scss']
})
export class SemicirProgressComponent {

	@Input('semicircleProgressBar') semicircleProgressBar;

	constructor() { }

	doSomethingWithCurrentSemicircleValue(e: MouseEvent) {
		console.log('17 -- e: ', e);
	}

}
