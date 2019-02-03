import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-directive-collection',
	templateUrl: './directive-collection.component.html',
	styleUrls: ['./directive-collection.component.scss']
})
export class DirectiveCollectionComponent implements OnInit {

	isThisStyle: Boolean = true;
	isThisClass: Boolean = true;
	isThisIf: Boolean = false;
	isViewTemplate = true;

	constructor() { }

	ngOnInit() { }

	setStyle() {
		const styleHere = {
			'color': this.isThisStyle ? 'red' : 'skyblue',
			'font-weight': this.isThisStyle ? 'bold' : 'normal',
			'font-size': this.isThisStyle ? '2em' : '1em'
		};
		return styleHere;
	}

	elseNgIf() {
		this.isThisIf = false;
		console.log('this is for *ngIf else..., triggered by func in else, and set isThisIf to false.');
	}

}
