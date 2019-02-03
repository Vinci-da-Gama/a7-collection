import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-agcookie-slider',
	templateUrl: './agcookie-slider.component.html',
	styleUrls: ['./agcookie-slider.component.scss']
})
export class AgcookieSliderComponent implements OnInit {

	sliderVal = '0';
	slicookieval = 1;

	constructor(
		private cookieService: CookieService
	) { }

	ngOnInit() { }

	onSaveCookie() {
		this.cookieService.set('sli-val', this.sliderVal);
	}

	getCookieVal() {
		this.slicookieval = Number(this.cookieService.get('sli-val'));
	}

}
