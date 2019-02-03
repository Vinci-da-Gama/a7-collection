import { Component, OnInit } from '@angular/core';
import { MapMarkerInterface } from '../../../contracts/interfaces/google-map-marker.interface';

@Component({
	selector: 'app-angu-goomap',
	templateUrl: './angu-goomap.component.html',
	styleUrls: ['./angu-goomap.component.scss']
})
export class AnguGoomapComponent implements OnInit {

	// google maps zoom level
	zoom: Number = 8;

	// initial center position for the map
	lat: Number = 51.673858;
	lng: Number = 7.815982;
	lat0: Number = 51.9;

	markers: MapMarkerInterface[] = [
		{
			lat: 51.673858,
			lng: 7.815982,
			label: 'A',
			draggable: true
		},
		{
			lat: 51.373858,
			lng: 7.215982,
			label: 'B',
			draggable: false
		},
		{
			lat: 51.723858,
			lng: 7.895982,
			label: 'C',
			draggable: true
		}
	]

	constructor() { }

	ngOnInit() { }

	clickedMarker(label: string, index: number) {
		console.log(`clicked the marker: ${label || index}`)
	}

	mapClicked($event: MouseEvent) {
		/* this.markers.push({
			lat: $event.coords.lat,
			lng: $event.coords.lng,
			draggable: true
		}); */
	}

	markerDragEnd(m: MapMarkerInterface, $event: MouseEvent) {
		console.log('dragEnd', m, $event);
	}

}
