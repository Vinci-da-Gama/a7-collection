import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChairComponent } from './edit-chair.component';

describe('EditChairComponent', () => {
	let component: EditChairComponent;
	let fixture: ComponentFixture<EditChairComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EditChairComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EditChairComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
