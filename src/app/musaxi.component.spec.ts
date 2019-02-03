import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MusaxiComponent } from './musaxi.component';

describe('MusaxiComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				MusaxiComponent
			],
		}).compileComponents();
	}));

	it('should create the Musaxi', () => {
		const fixture = TestBed.createComponent(MusaxiComponent);
		const musaxiApp = fixture.debugElement.componentInstance;
		expect(musaxiApp).toBeTruthy();
	});

	it(`should have as title 'a7-collection'`, () => {
		const fixture = TestBed.createComponent(MusaxiComponent);
		const musaxiApp = fixture.debugElement.componentInstance;
		expect(musaxiApp.title).toEqual('a7-collection');
	});

	it('should render title in a h1 tag', () => {
		const fixture = TestBed.createComponent(MusaxiComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Welcome to a7-collection!');
	});
});
