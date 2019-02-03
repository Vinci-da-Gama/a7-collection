import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'musaxi-ngswitch',
	templateUrl: './ngswitch.component.html',
	styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {

	caseForSwitch: String = '5';

	constructor() { }

	ngOnInit() { }

}
