import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcefheMainComponent } from './Lcefhe-main.component';

describe('LcefheMainComponent', () => {
	let component: LcefheMainComponent;
	let fixture: ComponentFixture<LcefheMainComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LcefheMainComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LcefheMainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
