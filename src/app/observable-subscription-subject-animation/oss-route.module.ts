import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OssMainComponent } from './oss-main/oss-main.component';

const ossRoute: Routes = [
	{ path: '', component: OssMainComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(ossRoute)
	],
	exports: [RouterModule]
})
export class OssRouteModule { }
