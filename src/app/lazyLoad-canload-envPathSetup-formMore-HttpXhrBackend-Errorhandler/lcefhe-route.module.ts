import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LcefheMainComponent } from './lcefhe-main/Lcefhe-main.component';

const icefheRoute: Routes = [
	{ path: '', component: LcefheMainComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(icefheRoute)
	],
	exports: [
		RouterModule
	]
})
export class LcefheRouteModule { }
