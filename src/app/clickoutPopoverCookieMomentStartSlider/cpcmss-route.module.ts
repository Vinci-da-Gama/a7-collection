import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CpcmssComponent } from '../../featureComponents/cpcmss/cpcmss.component';

const cpcmssRoute: Routes = [
	{ path: '', component: CpcmssComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(cpcmssRoute)
	],
	exports: [RouterModule]
})
export class CpcmssRouteModule { }
