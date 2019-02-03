import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDefinePathComponent } from './custom-define-path.component';

describe('CustomDefinePathComponent', () => {
	let component: CustomDefinePathComponent;
	let fixture: ComponentFixture<CustomDefinePathComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CustomDefinePathComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CustomDefinePathComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
