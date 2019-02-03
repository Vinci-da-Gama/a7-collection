import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitPageContentComponent } from './init-page-compo/init-page-content.component';

const initPageRoute: Routes = [
	{ path: '', component: InitPageContentComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(initPageRoute)
	],
	exports: [RouterModule]
})
export class InitPageRoutingModule { }
