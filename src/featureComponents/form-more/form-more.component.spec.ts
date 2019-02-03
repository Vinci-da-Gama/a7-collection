import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMoreComponent } from './form-more.component';

describe('FormMoreComponent', () => {
	let component: FormMoreComponent;
	let fixture: ComponentFixture<FormMoreComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FormMoreComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FormMoreComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
