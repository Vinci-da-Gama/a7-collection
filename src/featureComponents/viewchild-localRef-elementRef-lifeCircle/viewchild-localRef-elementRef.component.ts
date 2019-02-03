import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
	selector: 'app-viewchild-localref-elementref',
	templateUrl: './viewchild-localRef-elementRef.component.html',
	styleUrls: ['./viewchild-localRef-elementRef.component.scss']
})
export class ViewchildLocalElemRefRefLifeCircleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

	@Input('ParentVal') passFromParent: String = '';
	@ContentChild('localreftext') childContent: ElementRef;

	constructor() { }

	ngOnChanges(changes: SimpleChanges) {
		console.log('It will check all changes about variables in this child component.');
		console.log(changes.passFromParent.currentValue);
	}

	ngOnInit() {
		const textContent: String = this.childContent.nativeElement.textContent;
		console.log('21 -- in child compo, you only has ng-content, how to check value -- use ContentChild in child Compo and localRef in Parent Compo', `${textContent}`);
	}

	ngDoCheck() {
		console.log('when u need to check some changes did happen, use ngDoCheck.');
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit is only called once, after component content is initialized.');
	}

	ngAfterContentChecked() {
		console.log('ngAfterContentChecked will be called every content is changed.');
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit will be called only once, when view is initialized.');
	}

	ngAfterViewChecked() {
		console.log('ngAfterViewChecked will be called every changes in the view.');
	}

	ngOnDestroy() {
		console.log('ngOnDestory only happen when this component would be destoried.');
	}

}
