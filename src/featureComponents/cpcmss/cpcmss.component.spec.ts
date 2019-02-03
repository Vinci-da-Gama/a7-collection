import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpcmssComponent } from './cpcmss.component';

describe('CpcmssComponent', () => {
	let component: CpcmssComponent;
	let fixture: ComponentFixture<CpcmssComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CpcmssComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CpcmssComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
