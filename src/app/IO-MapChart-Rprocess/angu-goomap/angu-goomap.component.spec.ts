import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnguGoomapComponent } from './angu-goomap.component';

describe('AnguGoomapComponent', () => {
	let component: AnguGoomapComponent;
	let fixture: ComponentFixture<AnguGoomapComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AnguGoomapComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AnguGoomapComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
