import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormControlName, FormArray } from '@angular/forms';
import { InitPageContentComponent } from '../../app/init-page/init-page-compo/init-page-content.component';

import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-form-more',
	templateUrl: './form-more.component.html',
	styleUrls: ['./form-more.component.scss']
})
export class FormMoreComponent implements OnInit {

	genders = ['male', 'female'];
	formWithGender: FormGroup;
	GroupInside: FormGroup;
	fcHobbies: FormArray;
	private EMAILREGEX = '^.+@.+\..+$';
	forbiddenNameList = ['fbi0', 'fbi1'];
	fcUserName;
	fcEmail;
	fcGender;

	constructor(
		private _fb: FormBuilder
	) { }

	ngOnInit() {
		this.createFormCtrl();
		this.createFormGroup();
		// console.log('28 -- ', this.fcHobbies);
		// check value changes.
		/* this.signupForm.valueChanges.subscribe(
		  (value) => console.log(value)
		); */
		// check state changes -- valid or invalid.
		this.formWithGender.statusChanges.subscribe(
			(status) => console.log(status)
		);
		// Set up init value
		this.formWithGender.setValue({
			'GroupInside': {
				'fcUserName': 'whitespace',
				'fcEmail': 'whitespace@test.com'
			},
			'fcGender': 'female',
			'fcHobbies': []
		});
		// if you only want to update part of form values or modified some fields' values do PATCH
		this.formWithGender.patchValue({
			'GroupInside': {
				'fcUserName': 'EnterKey',
			}
		});
	}

	private createFormCtrl() {
		const initUserName = null;
		const initEmail = null;
		const initGender = null;
		const initHobbies = [];
		this.fcUserName = new FormControl(initUserName, [Validators.required, this.validateForbiddenName.bind(this)]);
		this.fcEmail = new FormControl(initEmail, [Validators.required, Validators.pattern(this.EMAILREGEX)], this.validateForbiddenEmail.bind(this));
		this.fcGender = new FormControl(initGender, [Validators.required]);
		this.fcHobbies = new FormArray(initHobbies);
	}

	private createFormGroup() {
		this.formWithGender = this._fb.group({
			GroupInside: new FormGroup({
				fcUserName: this.fcUserName,
				fcEmail: this.fcEmail,
			}),
			fcGender: this.fcGender,
			fcHobbies: this.fcHobbies
		});
	}

	onAddHobbies() {
		const formCtrl = new FormControl(null, [Validators.required]);
		(<FormArray>this.formWithGender.get('fcHobbies')).push(formCtrl);
	}

	validateForbiddenName(ctrl: FormControl): { [s: string]: boolean } {
		// in validators bind this, let this.frobiddenNameList doesnot match wrong scope.
		if (this.forbiddenNameList.indexOf(ctrl.value) !== -1) {
			return { 'NameIsForbidden': true }
		} else {
			return null;
		}
	}

	validateForbiddenEmail(ctrl: FormControl): Promise<any> | Observable<any> {
		const promise = new Promise<any>((resolve, reject) => {
			setTimeout(() => {
				if (ctrl.value === 'n@n.com') {
					resolve({ 'EmailIsForbidden': true });
				} else {
					resolve(null);
				}
			}, 1500);
		});
		return promise;
	}

	onSubmit() {
		console.log('107 -- ', this.formWithGender);
		this.formWithGender.reset();
	}

}
