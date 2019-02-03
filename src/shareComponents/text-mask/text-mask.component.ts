import { Component, OnInit } from '@angular/core';
import emailMask from 'text-mask-addons/dist/emailMask';

@Component({
	selector: 'app-text-mask',
	templateUrl: './text-mask.component.html',
	styleUrls: ['./text-mask.component.scss']
})
export class TextMaskComponent implements OnInit {

	dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
	eMask = emailMask;
	// streetMask = [/[3-9]{1,4}/, ' ', /[A-Z,a-z]{2,10}/];
	phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

	constructor() { }

	ngOnInit() { }

}
