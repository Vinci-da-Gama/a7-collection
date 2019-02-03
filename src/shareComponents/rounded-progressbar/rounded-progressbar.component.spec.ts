import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedProgressbarComponent } from './rounded-progressbar.component';

describe('RoundedProgressbarComponent', () => {
	let component: RoundedProgressbarComponent;
	let fixture: ComponentFixture<RoundedProgressbarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RoundedProgressbarComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RoundedProgressbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
