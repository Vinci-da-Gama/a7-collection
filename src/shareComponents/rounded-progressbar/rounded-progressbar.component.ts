import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-rounded-progressbar',
	templateUrl: './rounded-progressbar.component.html',
	styleUrls: ['./rounded-progressbar.component.scss']
})
export class RoundedProgressbarComponent implements OnInit {

	@Input('fullprogressData') fullprogressData;

	constructor() { }

	ngOnInit() { }

	doSomethingWithCurrentValue(e: MouseEvent) {
		console.log('22 -- ', e);
	}

}
