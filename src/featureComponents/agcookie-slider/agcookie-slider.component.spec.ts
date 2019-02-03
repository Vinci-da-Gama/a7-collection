import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgcookieSliderComponent } from './agcookie-slider.component';

describe('AgcookieSliderComponent', () => {
	let component: AgcookieSliderComponent;
	let fixture: ComponentFixture<AgcookieSliderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AgcookieSliderComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AgcookieSliderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
