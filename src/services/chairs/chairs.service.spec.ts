import { TestBed, inject } from '@angular/core/testing';

import { ChairsService } from './chairs.service';

describe('ChairsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ChairsService]
		});
	});

	it('should be created', inject([ChairsService], (service: ChairsService) => {
		expect(service).toBeTruthy();
	}));
});
