import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoeeEcapsuViewChildLocalElemRefComponent } from './IOEventEmitEncapsuLocal-ElemRefViewChild.compo';

describe('IoeeEcapsuViewChildLocalElemRefComponent', () => {
	let component: IoeeEcapsuViewChildLocalElemRefComponent;
	let fixture: ComponentFixture<IoeeEcapsuViewChildLocalElemRefComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [IoeeEcapsuViewChildLocalElemRefComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IoeeEcapsuViewChildLocalElemRefComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
