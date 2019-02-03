import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-valpasschildref',
	templateUrl: './valpasschildref.component.html',
	styleUrls: ['./valpasschildref.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ValpasschildrefComponent implements OnInit {

	// this is not error.
	@Input('fromParentText') childData = '';
	@Output('childToParentTextEmmitter') emitTextToParent = new EventEmitter<string>();

	constructor() { }

	ngOnInit() { }

	updateTextToParent() {
		this.emitTextToParent.emit(this.childData);
	}

}
