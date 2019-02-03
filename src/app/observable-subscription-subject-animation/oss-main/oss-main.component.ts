import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';
import { subscriptionLogsToBeFn } from 'rxjs/testing/TestScheduler';

import { SubjectDataTransactionService } from '../../../services/internal/subject-data-transaction.service';

@Component({
	selector: 'app-oss-main',
	templateUrl: './oss-main.component.html',
	styleUrls: ['./oss-main.component.scss']
})
export class OssMainComponent implements OnInit, OnDestroy {

	numSubscription: Subscription;
	strSubscription: Subscription;
	@ViewChild('textForSubject') textSubj: ElementRef;

	constructor(
		private subService: SubjectDataTransactionService,
		private router: Router
	) { }

	ngOnInit() {
		// watch sth each second
		const SecondObser = Observable.interval(1000);
		this.numSubscription = SecondObser.subscribe((second: number) => {
			console.log(`18 -- second is: ${second}.`);
		});
		const doSthObservable = Observable.create((observer: Observer<string>) => {
			setTimeout(() => {
				observer.next(`23 -- first data package`);
			}, 1000);
			setTimeout(() => {
				observer.next(`26 -- 2nd data package, 2 seconds later than first one.`);
			}, 3000);
			setTimeout(() => {
				observer.error(`29 -- error msg package, 2 second later than 2nd one -- if you see error, you will not see complete, if you see complete, you would never see anything after it.`);
			}, 5000);
			setTimeout(() => {
				observer.complete();
			}, 6000);
			setTimeout(() => {
				observer.next(`35 -- approve after complete, you should never see this.`);
			}, 8000)
		});

		this.strSubscription = doSthObservable.subscribe(
			(data: string) => {
				console.log(`35 -- successful function -- ${data}.`);
			},
			(err: string) => {
				console.log('38 -- err function: ', err);
			},
			() => {
				console.log(`41 -- this is done function.`);
			}
		);

	}

	assignValToSubjectVariable() {
		this.subService.inputText.next(this.textSubj.nativeElement.value);
		// this.router.navigate(['/valpass-contentelemRef-dir-encapsu']);
	}

	ngOnDestroy() {
		this.numSubscription.unsubscribe();
		this.strSubscription.unsubscribe();
	}

}
