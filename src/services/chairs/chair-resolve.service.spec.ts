import { TestBed, inject } from '@angular/core/testing';

import { ChairResolveService } from './chair-resolve.service';

describe('ChairResolveService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ChairResolveService]
		});
	});

	it('should be created', inject([ChairResolveService], (service: ChairResolveService) => {
		expect(service).toBeTruthy();
	}));
});
