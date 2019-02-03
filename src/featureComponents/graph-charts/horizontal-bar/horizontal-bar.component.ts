import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
	selector: 'app-horizontal-bar',
	templateUrl: './horizontal-bar.component.html',
	styleUrls: ['./horizontal-bar.component.scss']
})
export class HorizontalBarComponent implements OnInit {

	@Input('hordata') hordata;
	@ViewChild('horcanvas') hbCanvas: ElementRef;
	hbChart: any;

	constructor() { }

	ngOnInit() {
		this.initHorizontalChart();
	}

	private initHorizontalChart() {
		this.hbChart = new Chart(this.hbCanvas.nativeElement, this.hordata);
	}

}
