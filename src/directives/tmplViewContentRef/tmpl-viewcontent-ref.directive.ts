import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
	selector: '[appTmplViewcontentRef]'
})
export class TmplViewcontentRefDirective {

	@Input() set appTmplViewcontentRef(isShow: boolean) {
		console.log(isShow);
		if (isShow) {
			this.vcRef.createEmbeddedView(this.tmplRef);
		} else {
			this.vcRef.clear();
		}
	}

	constructor(
		private tmplRef: TemplateRef<any>,
		private vcRef: ViewContainerRef
	) { }

}
