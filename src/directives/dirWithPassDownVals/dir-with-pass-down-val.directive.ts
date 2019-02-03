import { Directive, Input, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
	selector: '[appDirWithPassDownVal]'
})
export class DirWithPassDownValDirective implements OnInit {

	@Input() defColor: String = '';
	@Input() highlightedColor: String = '';
	@HostBinding('style.backgroundColor') backgroundColor: String;

	constructor() { }

	ngOnInit() {
		this.backgroundColor = this.defColor
	}

	@HostListener('mouseenter') whenMouseEnter(eventData: Event) {
		console.log('18 -- ', eventData);
		this.backgroundColor = this.highlightedColor;
	}

	@HostListener('mouseleave') whenMouseLeave(eventData: Event) {
		this.backgroundColor = this.defColor;
	}

}
