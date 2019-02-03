import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterArray',
	pure: false
})
export class FilterArrayPipe implements PipeTransform {

	transform(array: any, filterString: string, targetAttr: string): any {
		if (array.length === 0 || filterString === '') {
			return array;
		}
		const resultArr = [];
		for (const item of array) {
			if (item[targetAttr] === filterString) {
				resultArr.push(item);
			}
		}
		return resultArr;
	}

}
