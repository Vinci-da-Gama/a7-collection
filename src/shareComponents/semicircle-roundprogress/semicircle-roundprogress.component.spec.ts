import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemicirProgressComponent } from './semicircle-roundprogress.component';

describe('SemicirProgressComponent', () => {
	let component: SemicirProgressComponent;
	let fixture: ComponentFixture<SemicirProgressComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SemicirProgressComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SemicirProgressComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
