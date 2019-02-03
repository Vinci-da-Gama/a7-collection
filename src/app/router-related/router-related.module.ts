import { NgModule } from '@angular/core';
import { FormReactiveformCommonModule } from '../share-module/form-reactiveform-common/form-reactiveform-common.module';
import { SuiTabsModule } from 'ng2-semantic-ui';
import { RouterRelatiedRouterModule } from './router-relatied.router.module';

import { RouterMainComponent } from './router.main/router.main.component';
import { NextContentComponent } from '../../featureComponents/next-compo/next-content.component';
import { UsersComponent } from '../../shareComponents/users/users.component';
import { UserComponent } from '../../shareComponents/user/user.component';
import { ChairsComponent } from '../../featureComponents/chairs/chairs.component';
import { ChairComponent } from '../../featureComponents/chair/chair.component';
import { EditChairComponent } from '../../featureComponents/edit-chair/edit-chair.component';

import { ChairsService } from '../../services/chairs/chairs.service';

@NgModule({
	imports: [
		FormReactiveformCommonModule,
		SuiTabsModule,
		RouterRelatiedRouterModule
	],
	declarations: [
		RouterMainComponent,
		NextContentComponent,
		UsersComponent,
		UserComponent,
		ChairsComponent,
		ChairComponent,
		EditChairComponent
	],
	providers: [
		ChairsService
	]
	/* ,
	exports: [RouterMainComponent] */
})
export class RouterRelatedModule { }
