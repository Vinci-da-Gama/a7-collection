import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-ioee-ecapsu-local-element-ref-viewchild',
	templateUrl: './IOEventEmitEncapsuLocal-ElemRefViewChild.compo.html',
	styleUrls: ['./IOEventEmitEncapsuLocal-ElemRefViewChild.compo.scss']
})
export class IoeeEcapsuViewChildLocalElemRefComponent implements OnInit {

	initData: String = 'initTextData';
	private inputOne: String = 'Use ng-content, you can place small html template in parent component,';
	private inputTwo: String = 'And it is good for quickly apply template to multiple places';
	inputWithLocalRef: String = `${this.inputOne} in this way you can quickly access data in parent template, donnot need to pass it down. ${this.inputTwo}`;
	valGoChild: String = 'Value Goes Child';
	rz: String = '';
	@ViewChild('localreftext') textWord: ElementRef;

	constructor() { }

	ngOnInit() {
		this.showNativeElement();
	}

	getValFromLocalRef(localRef: HTMLInputElement) {
		this.rz = localRef.value;
	}

	showNativeElement() {
		console.log(this.textWord.nativeElement);
	}

	updateTextEmmitter(e: String) {
		this.initData = e;
	}

	onChangesFirst() {
		this.inputWithLocalRef = 'Val is Changed.';
	}

	destoryFirst() {
		this.inputWithLocalRef = '';
		this.rz = '';
	}

}
