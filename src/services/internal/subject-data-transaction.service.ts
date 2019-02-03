import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SubjectDataTransactionService {
	inputText = new Subject();
}
