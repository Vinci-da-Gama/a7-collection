import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ExchangeRateComponent } from './exchange-rate-map/exchange-rate.component';
import { SupplyRateComponent } from './pass-rate-by-route-parameter/supply-rate.component';

const mapexrateRoute: Routes = [
	{
		path: '', component: ExchangeRateComponent, children: [
			{ path: 'support-rate/:rate', component: SupplyRateComponent }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(mapexrateRoute)
	],
	exports: [RouterModule]
})
export class InputOutputMapChartRoundprocessRouteModule { }
