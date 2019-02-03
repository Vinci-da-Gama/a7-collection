import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateCollectionComponent } from './animate-collection.component';

describe('AnimateCollectionComponent', () => {
	let component: AnimateCollectionComponent;
	let fixture: ComponentFixture<AnimateCollectionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AnimateCollectionComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AnimateCollectionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
