import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedataFromSubjectserveComponent } from './receivedata-from-subjectserve.component';

describe('ReceivedataFromSubjectserveComponent', () => {
	let component: ReceivedataFromSubjectserveComponent;
	let fixture: ComponentFixture<ReceivedataFromSubjectserveComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ReceivedataFromSubjectserveComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ReceivedataFromSubjectserveComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
