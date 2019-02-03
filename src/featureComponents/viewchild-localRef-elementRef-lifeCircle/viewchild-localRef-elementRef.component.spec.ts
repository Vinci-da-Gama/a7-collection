import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildLocalRefElementRefComponent } from './viewchild-localRef-elementRef.component';

describe('ViewchildLocalRefElementRefComponent', () => {
	let component: ViewchildLocalRefElementRefComponent;
	let fixture: ComponentFixture<ViewchildLocalRefElementRefComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ViewchildLocalRefElementRefComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ViewchildLocalRefElementRefComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
