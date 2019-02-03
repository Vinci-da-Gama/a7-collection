import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';

import { WeatherService } from '../../../services/weather.service';
import { RoundprogressClass } from '../../../contracts/models/roundprogress-class';

@Component({
	selector: 'app-exchange-rate',
	templateUrl: './exchange-rate.component.html',
	styleUrls: ['./exchange-rate.component.scss'],
	providers: [WeatherService]
})
export class ExchangeRateComponent implements OnInit {

	todayRate: Number = 3.14159265758;
	commingRate: Number = 0;
	weatherChart: any;

	@ViewChild('piecanvas') doughnutCanvas: ElementRef;
	doughnutChart: any;

	horizontalBarData = {
		type: 'horizontalBar',
		data: {
			labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
			datasets: [
				{
					label: 'Population (millions)',
					backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
					data: [2478, 5267, 734, 784, 433]
				}
			]
		},
		options: {
			legend: { display: false },
			title: {
				display: true,
				text: 'Predicted world population (millions) in 2050'
			}
		}
	};

	mixedChartData = {
		type: 'bar',
		data: {
			labels: ['1900', '1950', '1999', '2050'],
			datasets: [{
				label: 'Europe',
				type: 'line',
				borderColor: '#8e5ea2',
				data: [408, 547, 675, 734],
				fill: false
			}, {
				label: 'Africa',
				type: 'line',
				borderColor: '#3e95cd',
				data: [133, 221, 783, 2478],
				fill: false
			}, {
				label: 'Europe',
				type: 'bar',
				backgroundColor: 'rgba(0,0,0,0.2)',
				data: [408, 547, 675, 734],
			}, {
				label: 'Africa',
				type: 'bar',
				backgroundColor: 'rgba(0,0,0,0.2)',
				backgroundColorHover: '#3e95cd',
				data: [133, 221, 783, 2478]
			}
			]
		},
		options: {
			title: {
				display: true,
				text: 'Population growth (millions): Europe & Africa'
			},
			legend: { display: false }
		}
	};

	fPData: RoundprogressClass = {
		currVal: 17,
		max: 50,
		color: 'rgba(255, 99, 131, .5)',
		bgc: '#cce2ff',
		radius: 80,
		stroke: 28,
		semicircle: false,
		rounded: true,
		clockwise: false,
		responsive: true,
		duration: 3300,
		animation: 'easeInOutQuad',
		animDelay: 0
	};

	sCPData: RoundprogressClass = {
		currVal: 20,
		max: 50,
		color: '#8e5ea1',
		bgc: 'rgba(255, 158, 64, .7)',
		radius: 100,
		stroke: 18,
		semicircle: true,
		rounded: false,
		clockwise: true,
		responsive: true,
		duration: 3330,
		animation: 'easeInOutCubic',
		animDelay: 0
	};

	constructor(
		private wService: WeatherService
	) { }

	ngOnInit() {
		this.dailyWeatherChart();
		this.displayChartPie();
	}

	private dailyWeatherChart() {
		this.wService.dailyForecast()
			.subscribe((res) => {
				if (res) {
					// const wObj = Object.assign({}, res);
					console.log('96 -- ', res, typeof res);
					const temp_max = res['list'].map(eachElem => eachElem.main.temp_max);
					const temp_min = res['list'].map(eachElem => eachElem.main.temp_min);
					const alldates = res['list'].map(eachElem => eachElem.dt);

					const weatherDates = [];
					alldates.forEach((elem) => {
						const jsdate = new Date(elem * 1000)
						weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
					});
					this.weatherChart = new Chart('canvas', {
						type: 'line',
						data: {
							labels: weatherDates,
							datasets: [
								{
									data: temp_max,
									borderColor: '#3cba9f',
									fill: false
								},
								{
									data: temp_min,
									borderColor: '#ffcc00',
									fill: false
								},
							]
						},
						options: {
							legend: {
								display: false
							},
							scales: {
								xAxes: [{
									display: true
								}],
								yAxes: [{
									display: true
								}],
							}
						}
					});
				} else {
					console.log('138 -- err.');
					return;
				}
			});
	}

	private displayChartPie() {
		this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [20, 30, 15, 35],
					backgroundColor: [
						'rgb(255, 99, 132)',
						'rgb(255, 159, 64)',
						'rgba(0, 255, 0, .5)',
						'#FFCD56'
					],
					label: 'Dataset 1'
				}],
				labels: ['Red', 'Orange', 'Green', 'Yellow']
			},
			options: {
				responsive: true,
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Chart.js Doughnut Chart'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		});
	}

	updateExchangeRate(newRate: number) {
		this.todayRate = newRate;
	}

}
