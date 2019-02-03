import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
import { FormReactiveformCommonModule } from '../share-module/form-reactiveform-common/form-reactiveform-common.module';
import { Portion1RouteModule } from './fgpitpm-route.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuiDimmerModule, SuiRatingModule, SuiPopupModule } from 'ng2-semantic-ui';
import { TextMaskModule } from 'angular2-text-mask';

import { FormGroupComponent } from './form-group/form-group.component';
import { ConfirmModalComponent } from '../../helpers/confirm-modal/confirm-modal.component';
import { RatingComponent } from './rating/rating.component';
import { TextMaskComponent } from '../../shareComponents/text-mask/text-mask.component';

import { FixNumberPipe } from '../../pipes/fix-number.pipe';
import { CrudService } from '../../services/crud.service';
import { InterceptorService } from '../../services/interceptor.service';
import { LoginInterceptorService } from '../../services/login-interceptor.service';


@NgModule({
	imports: [
		FormReactiveformCommonModule, /* CommonModule,  */Portion1RouteModule, /*  ReactiveFormsModule, */SuiDimmerModule,
		SuiRatingModule, SuiPopupModule, TextMaskModule
	],
	declarations: [
		FormGroupComponent,
		ConfirmModalComponent,
		RatingComponent,
		TextMaskComponent,
		FixNumberPipe
	],
	entryComponents: [
		ConfirmModalComponent
	],
	providers: [
		CrudService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptorService,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoginInterceptorService,
			multi: true
		}
	],
	exports: [FormGroupComponent]
})
export class FormGroupPipeI18nTooltipPopoverModalModule { }
