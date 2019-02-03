import { FixNumberPipe } from './fix-number.pipe';

describe('FixNumberPipe', () => {
	it('create an instance', () => {
		const pipe = new FixNumberPipe();
		expect(pipe).toBeTruthy();
	});
});
