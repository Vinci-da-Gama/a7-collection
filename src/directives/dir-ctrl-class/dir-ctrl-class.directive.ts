import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appDirCtrlClass]'
})
export class DirCtrlClassDirective {

	@HostBinding('class.fluid') theFluid = false;

	constructor() { }

	@HostListener('click') toggleFluid() {
		this.theFluid = !this.theFluid;
	}

}
