import { Component, OnInit } from '@angular/core';
// import { OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent } from 'angular-star-rating/star-rating-struct';

@Component({
	selector: 'app-angu-rating',
	templateUrl: './angu-rating.component.html',
	styleUrls: ['./angu-rating.component.scss']
})
export class AnguRatingComponent implements OnInit {

	// onClickResult: OnClickEvent;
	// onHoverRatingChangeResult: OnHoverRatingChangeEvent;
	// onRatingChangeResult: OnRatingChangeEven;

	constructor() { }

	ngOnInit() { }

	/* onClick = ($event: OnClickEvent) => {
		console.log('onClick $event: ', $event);
		this.onClickResult = $event;
	};

	onRatingChange = ($event: OnRatingChangeEven) => {
		console.log('onRatingUpdated $event: ', $event);
		this.onRatingChangeResult = $event;
	};

	onHoverRatingChange = ($event: OnHoverRatingChangeEvent) => {
		console.log('onHoverRatingChange $event: ', $event);
		this.onHoverRatingChangeResult = $event;
	}; */

}
