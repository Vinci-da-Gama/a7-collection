import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

	transform(str: string, maxlength?: number, limit?: number): string {
		if (str.length >= maxlength) {
			return str.substring(0, limit);
		} else {
			return str;
		}
	}

}
