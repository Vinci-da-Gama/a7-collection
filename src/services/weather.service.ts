import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import '../app/operators';

@Injectable()
export class WeatherService {

	constructor(
		private _http: HttpClient
	) { }

	dailyForecast() {
		const weatherApi = `https://api.myjson.com/bins/xzbf7`;
		return this._http.get(weatherApi);
	}

}
