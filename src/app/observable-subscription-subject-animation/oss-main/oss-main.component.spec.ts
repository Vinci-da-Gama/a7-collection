import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OssMainComponent } from './oss-main.component';

describe('OssMainComponent', () => {
	let component: OssMainComponent;
	let fixture: ComponentFixture<OssMainComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OssMainComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OssMainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
