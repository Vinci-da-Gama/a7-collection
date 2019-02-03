import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { InputOutputMapChartRoundprocessRouteModule } from './iomcr-route.module';
import { ExchangeRateComponent } from './exchange-rate-map/exchange-rate.component';
import { SupplyRateComponent } from './pass-rate-by-route-parameter/supply-rate.component';
import { AnguGoomapComponent } from './angu-goomap/angu-goomap.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { HorizontalBarComponent } from '../../featureComponents/graph-charts/horizontal-bar/horizontal-bar.component';
import { MixedChartComponent } from '../../featureComponents/graph-charts/mixed-chart/mixed-chart.component';
import { RoundedProgressbarComponent } from '../../shareComponents/rounded-progressbar/rounded-progressbar.component';
import { SemicirProgressComponent } from '../../shareComponents/semicircle-roundprogress/semicircle-roundprogress.component';

@NgModule({
	imports: [
		CommonModule, FormsModule, InputOutputMapChartRoundprocessRouteModule,
		AgmCoreModule.forRoot(
			{
				apiKey: 'AIzaSyBeYVe4dN0JTNcmgSdXTb6t-cCXEucUtwU'
			}
		),
		RoundProgressModule
	],
	declarations: [
		ExchangeRateComponent,
		SupplyRateComponent,
		AnguGoomapComponent,
		InputOutputComponent,
		HorizontalBarComponent,
		MixedChartComponent,
		RoundedProgressbarComponent,
		SemicirProgressComponent
	],
	exports: [ExchangeRateComponent]
})
export class InputOutputMapChartRoundprocessModule { }
