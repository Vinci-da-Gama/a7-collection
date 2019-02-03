import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpcmssRouteModule } from './cpcmss-route.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';

import { CpcmssComponent } from '../../featureComponents/cpcmss/cpcmss.component';
import { AnguRatingComponent } from '../../featureComponents/angu-rating/angu-rating.component';
import { AgcookieSliderComponent } from '../../featureComponents/agcookie-slider/agcookie-slider.component';

@NgModule({
	imports: [
		CommonModule,
		CpcmssRouteModule,
		ClickOutsideModule,
		FormsModule,
		NouisliderModule
	],
	declarations: [CpcmssComponent, AnguRatingComponent, AgcookieSliderComponent],
	exports: [CpcmssComponent]
})
export class CoPCookieMomentSliderModule { }
