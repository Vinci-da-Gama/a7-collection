import { TestBed, inject } from '@angular/core/testing';

import { SubjectDataTransactionService } from './subject-data-transaction.service';

describe('SubjectDataTransactionService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [SubjectDataTransactionService]
		});
	});

	it('should be created', inject([SubjectDataTransactionService], (service: SubjectDataTransactionService) => {
		expect(service).toBeTruthy();
	}));
});
