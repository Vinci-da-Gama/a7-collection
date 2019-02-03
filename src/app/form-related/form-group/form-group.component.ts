import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { SuiModalService, ModalSize } from 'ng2-semantic-ui';

import { FbAuthService } from '../../../services/auth/fb-auth.service';
import { AnonymousFbUserClass } from '../../../contracts/models/anonymous-user-state';
import { ConfirmModal } from '../../../helpers/confirm-modal/confirm-modal.component';
import { CrudService } from '../../../services/crud.service';

@Component({
	selector: 'app-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

	public isLoading: Boolean = false;
	private anonymousUser: AnonymousFbUserClass;
	private EMAILREGEX = '^.+@.+\..+$';
	isSignup: Boolean = false;
	isSignin: Boolean = false;
	canDimmed: Boolean = false;

	signupForm: FormGroup;
	suemail: FormControl;
	supassword: FormControl;

	signinForm: FormGroup;
	siemail: FormControl;
	sipassword: FormControl;

	myNumber: Number = 3.14159275758;
	now = Date.now();
	receiveData = {};

	constructor(
		private afAuthService: FbAuthService,
		private _fb: FormBuilder,
		private modalService: SuiModalService,
		private curdService: CrudService
	) {
		// this.checkAnonymous();
		// this.checkFbStorage();
	}

	ngOnInit() {
		this.createSingupFormControl();
		this.createSignupFormGroup();
		this.createSinginFormControl();
		this.createSigninFormGroup();

		this.curdService.getMenu()
			.subscribe((data) => {
				this.receiveData = data['menu'];
				console.log('57 -- ', this.receiveData);
			});
		this.curdService.getForEvent()
			.subscribe((data: HttpEvent<Object>) => {
				console.log(data.type === HttpEventType.Sent);
			});

		this.curdService.getForHttpRequestNProgress()
			.subscribe((data) => {
				this.receiveData = data;
				console.log('58 This will trigger Interceptor -- ', this.receiveData);
			});
	}

	private checkAnonymous() {
		this.afAuthService.AnonymousAuth()
			.subscribe((res) => {
				this.isLoading = true;
				if (res) {
					this.isShowAnonymousUser(true);
					// console.log('23 -- ', res);
					this.anonymousUser = new AnonymousFbUserClass(
						res.isAnonymous,
						res.refreshToken,
						res.uid,
						res.metadata.creationTime,
						res.metadata.lastSignInTime
					);
					console.log('82 -- anonymous user state: ', this.anonymousUser);
					this.afAuthService.signOut();
					this.isLoading = false;
				} else {
					this.isShowAnonymousUser(false);
					this.afAuthService.signOut();
					this.isLoading = false;
					return;
				}
			});
	}

	isShowAnonymousUser(isShow: boolean = false): boolean {
		return isShow;
	}

	private checkFbStorage() {
		this.afAuthService.checkFbStore()
			.subscribe((res) => {
				console.log('101 -- res', res);
			});
	}

	private createSingupFormControl() {
		const initEmail = null;
		const initPswd = null;
		this.suemail = new FormControl(initEmail, [Validators.required, Validators.pattern(this.EMAILREGEX)]);
		this.supassword = new FormControl(initPswd, [Validators.required, Validators.minLength(6)]);
	}

	private createSignupFormGroup() {
		this.signupForm = new FormGroup({
			'suemail': this.suemail,
			'supassword': this.supassword
		});
	}

	private createSinginFormControl() {
		const initEmail = null;
		const initPswd = null;
		this.siemail = new FormControl(initEmail, [Validators.required, Validators.pattern(this.EMAILREGEX)]);
		this.sipassword = new FormControl(initPswd, [Validators.required, Validators.minLength(6)]);
	}

	private createSigninFormGroup() {
		// use formBuilder to build fromGroup
		this.signinForm = this._fb.group({
			siemail: this.siemail,
			sipassword: this.sipassword
		});
	}

	onAuth(f: FormGroup) {
		this.isLoading = true;
		const fVal = f.value;
		const isSignupForm = f.controls.hasOwnProperty('suemail');
		if (isSignupForm) {
			this.afAuthService.registerUser(fVal.suemail, fVal.supassword)
				.then((res) => {
					console.log('143 -- ', res);
					this.signupForm.reset();
					this.isLoading = false;
					this.handleModal(isSignupForm);
				})
				.catch((err) => {
					console.log('149 -- ', err);
					this.isLoading = false;
				});
		} else {
			this.afAuthService.signinUser(fVal.siemail, fVal.sipassword)
				.then((res) => {
					console.log('155 -- ', res);
					this.signinForm.reset();
					this.isLoading = false;
					this.handleModal(isSignupForm);
				})
				.catch((err) => {
					console.log('161 -- ', err);
					this.isLoading = false;
				});
		}
	}

	private cancleDimmed() {
		this.canDimmed = true;
		setTimeout(() => {
			this.canDimmed = false;
		}, 2000);
	}

	private handleModal(chooseForm: boolean) {
		this.modalService
			.open(new ConfirmModal('Are you sure?', 'Are you sure about accepting this?', ModalSize.Normal))
			.onApprove(() => {
				if (chooseForm) {
					this.isSignup = true;
				} else {
					this.isSignin = true;
				}
			})
			.onDeny(() => {
				this.cancleDimmed();
			});
	}

	onSignout() {
		this.afAuthService.signOut();
		alert('sign out');
	}

}
