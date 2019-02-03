import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValpasschildrefComponent } from './valpasschildref.component';

describe('ValpasschildrefComponent', () => {
	let component: ValpasschildrefComponent;
	let fixture: ComponentFixture<ValpasschildrefComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ValpasschildrefComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ValpasschildrefComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
