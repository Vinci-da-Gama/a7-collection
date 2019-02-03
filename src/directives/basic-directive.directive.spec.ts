import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { BasicDirectiveDirective } from './basic-directive.directive';
import { ElementRef } from '@angular/core';


@Component({
	template: `<em appBasicDirective>basic directive...</em>`
})
class TestHBasicDIrComponent { }

describe('BasicDirectiveDirective', () => {

	let component: TestHBasicDIrComponent;
	let fixture: ComponentFixture<TestHBasicDIrComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [BasicDirectiveDirective]
		});
		fixture = TestBed.createComponent(TestHBasicDIrComponent);
		component = fixture.componentInstance;
	});

	it('should create an instance', () => {
		const directive = new BasicDirectiveDirective();
		expect(directive).toBeTruthy();
	});
});
