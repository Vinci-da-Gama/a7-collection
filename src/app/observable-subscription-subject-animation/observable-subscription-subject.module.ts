import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OssRouteModule } from './oss-route.module';
import { GlobalDirectiveModule } from '../share-module/global-directive/global-directive.module';

import { OssMainComponent } from './oss-main/oss-main.component';
import { ReceivedataFromSubjectserveComponent } from '../../featureComponents/receivedata-from-subjectserve/receivedata-from-subjectserve.component';
import { AnimateCollectionComponent } from '../../featureComponents/animation-collection/animate-collection.component';


@NgModule({
	imports: [
		CommonModule,
		OssRouteModule,
		GlobalDirectiveModule
	],
	declarations: [
		OssMainComponent,
		ReceivedataFromSubjectserveComponent,
		AnimateCollectionComponent
	]
})
export class ObservableSubscriptionSubjectModule { }
