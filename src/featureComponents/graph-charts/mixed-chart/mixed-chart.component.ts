import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
	selector: 'app-mixed-chart',
	templateUrl: './mixed-chart.component.html',
	styleUrls: ['./mixed-chart.component.scss']
})
export class MixedChartComponent implements OnInit {

	@Input('mixdata') mixdata;
	@ViewChild('mixedcanvas') mixedGraphCanvas: ElementRef;
	mixedChart: any;

	constructor() { }

	ngOnInit() {
		this.initMixedChart();
	}

	private initMixedChart() {
		console.log('23 -- ', this.mixedGraphCanvas);
		console.log('24 -- ', this.mixdata);
		this.mixedChart = new Chart(this.mixedGraphCanvas.nativeElement, this.mixdata);
	}

}
