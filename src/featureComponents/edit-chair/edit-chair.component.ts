import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ChildActivationEnd } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { ChairInterface } from '../../contracts/interfaces/chair-interface';
import { AsyncObsPromiseBoolInterface } from '../../contracts/interfaces/async-obspromise-interface';
import { ChairsService } from '../../services/chairs/chairs.service';

@Component({
	selector: 'app-edit-chair',
	templateUrl: './edit-chair.component.html',
	styleUrls: ['./edit-chair.component.scss']
})
export class EditChairComponent implements OnInit, AsyncObsPromiseBoolInterface {

	targetChair: ChairInterface;
	isAllowedEdit: Boolean = false;
	UpdateChairForm: FormGroup;
	ChairId: number;
	ChairName: FormControl;
	ChairStatus: FormControl;
	isUpdated: Boolean = false;

	constructor(
		private aRoute: ActivatedRoute,
		private router: Router,
		private _fb: FormBuilder,
		private cService: ChairsService
	) { }

	ngOnInit() {
		console.log(this.aRoute.snapshot.params['id']);
		console.log(this.aRoute.snapshot.queryParams);
		console.log('36 -- fragment: ', this.aRoute.snapshot.fragment);
		this.aRoute.params.subscribe((params: Params) => {
			this.ChairId = +params['id'];
		});
		this.aRoute.queryParams.subscribe((qParams: Params) => {
			this.isAllowedEdit = +qParams['allowEdit'] === 1 ? true : false;
		});
		this.targetChair = this.cService.getChairById(this.ChairId);
		this.createFormCtrl(this.targetChair);
		this.createFormGroup();
	}

	createFormCtrl(chair: ChairInterface) {
		let cName = null;
		let cStatus = null;
		if (chair && chair.hasOwnProperty('id')) {
			cName = chair.name;
			cStatus = chair.status;
		}
		this.ChairName = new FormControl(cName, [Validators.required]);
		this.ChairStatus = new FormControl(cStatus, [Validators.required]);
	}

	createFormGroup() {
		this.UpdateChairForm = this._fb.group({
			ChairName: this.ChairName,
			ChairStatus: this.ChairStatus
		});
	}

	onUpdate(f: FormGroup) {
		const fVal = f.value;
		this.cService.updateChair(this.ChairId, { name: fVal.ChairName, status: fVal.ChairStatus });
		this.UpdateChairForm.reset();
		this.isUpdated = true;
	}

	private reloadCurrPage() {
		this.router.navigate(['./'], {
			relativeTo: this.aRoute,
			queryParamsHandling: 'preserve'
		});
	}

	private goParentPage() {
		this.router.navigate(['../'], {
			relativeTo: this.aRoute
		});
	}

	// goChairPage() {
	// 	console.log('91 -- ', this.isLeavePage);
	// 	if (!this.isLeavePage) {
	// 		confirm('You donot make any change and update this form, so you should stay here.');
	// 		this.reloadCurrPage();
	// 	} else {
	// 		this.goParentPage();
	// 	}
	// }

	canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
		if (!this.isAllowedEdit) {
			// can deactivate is true.
			return true;
		}
		const isChanged: boolean = this.ChairName.value !== this.targetChair.name || this.ChairStatus.value !== this.targetChair.status;
		console.log('107 -- changed? ', isChanged && this.isUpdated);
		if (isChanged && this.isUpdated) {
			console.log('After confirm you can leave');
			return confirm('Do you want to discard changes and leave this page???');
		} else {
			// can deactivate is true.
			return true;
		}
	}

}
