import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitPageContentComponent } from './init-page-content.component';

describe('InitPageContentComponent', () => {
	let component: InitPageContentComponent;
	let fixture: ComponentFixture<InitPageContentComponent>;

	beforeEach(async(() => {
		// if in webpack, no need .compileComponents(), wpk will do it foryou. in angular-cli, you should use .compileComponent()
		TestBed.configureTestingModule({
			declarations: [InitPageContentComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InitPageContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('expected text should be welcome to', () => {
		expect(component.welcome).toEqual('Welcome to');
	});

});
