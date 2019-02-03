import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCollectionComponent } from './directive-collection.component';

describe('DirectiveCollectionComponent', () => {
	let component: DirectiveCollectionComponent;
	let fixture: ComponentFixture<DirectiveCollectionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DirectiveCollectionComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DirectiveCollectionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
