import { Directive, OnInit, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appCustomHostDirective]'
})
export class CustomHostDirectiveDirective implements OnInit {

	@HostBinding('style.backgroundColor') backgroundColor: String = 'transparent';

	constructor(
		private elRef: ElementRef,
		private render2: Renderer2
	) { }

	ngOnInit() { }

	@HostListener('mouseenter') whenMouseEnter(eventData: Event) {
		// render2 way
		/* this.render2.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
		this.render2.addClass(this.elRef.nativeElement, 'render2class'); */
		// hostBinding way
		this.backgroundColor = 'yellow';
	}

	@HostListener('mouseleave') whenMouseLeave(eventData: Event) {
		// render2 way
		/* this.render2.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
		this.render2.removeClass(this.elRef.nativeElement, 'render2class'); */
		// hostBinding way
		this.backgroundColor = 'transparent';
	}

}
