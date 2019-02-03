import { Component, OnInit } from '@angular/core';

import { SubjectDataTransactionService } from '../../services/internal/subject-data-transaction.service';

@Component({
	selector: 'app-receivedata-from-subjectserve',
	templateUrl: './receivedata-from-subjectserve.component.html',
	styleUrls: ['./receivedata-from-subjectserve.component.scss']
})
export class ReceivedataFromSubjectserveComponent implements OnInit {

	subjText: String | string = 'Waiting data from subject service...';

	constructor(
		private subService: SubjectDataTransactionService
	) { }

	ngOnInit() {
		this.subService.inputText.subscribe((text: string) => {
			this.subjText = text;
		});
	}

}
