import { NgModule } from '@angular/core';
import { LcefheRouteModule } from './lcefhe-route.module';
import { FormReactiveformCommonModule } from '../share-module/form-reactiveform-common/form-reactiveform-common.module';

import { LcefheMainComponent } from './lcefhe-main/Lcefhe-main.component';
import { CustomDefinePathComponent } from '@customDefinePath/custom-define-path.component';
import { FormMoreComponent } from '@formMore/form-more.component';

@NgModule({
	imports: [
		FormReactiveformCommonModule,
		LcefheRouteModule
	],
	declarations: [
		LcefheMainComponent,
		CustomDefinePathComponent,
		FormMoreComponent
	]
})
export class CanLazyloadEnvPathFormMoreBackendErrorhandlModule { }
