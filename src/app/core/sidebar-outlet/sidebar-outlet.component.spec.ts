import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOutletComponent } from './sidebar-outlet.component';

describe('SidebarOutletComponent', () => {
	let component: SidebarOutletComponent;
	let fixture: ComponentFixture<SidebarOutletComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SidebarOutletComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SidebarOutletComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
