import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnguRatingComponent } from './angu-rating.component';

describe('AnguRatingComponent', () => {
	let component: AnguRatingComponent;
	let fixture: ComponentFixture<AnguRatingComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AnguRatingComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AnguRatingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
