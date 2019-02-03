import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'fixNumber'
})
export class FixNumberPipe implements PipeTransform {

	transform(val: number, digits: number = 3): number {
		return Number(val.toFixed(digits));
	}

}
