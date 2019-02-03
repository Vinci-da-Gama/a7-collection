import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseFirestore } from '@firebase/firestore-types';
import { Observable } from 'rxjs/observable';
import '../../app/operators';

@Injectable()
export class FbAuthService {

	private anonymousUserState: Observable<firebase.User>;
	public fbStoreItems: Observable<any[]>;
	public fbToken = '';

	constructor(
		private httpCli: HttpClient,
		private afAuth: AngularFireAuth,
		private afStore: AngularFirestore,
		private afDb: AngularFireDatabase
	) { }

	public AnonymousAuth() {
		this.afAuth.auth.signInAnonymously()
		return this.afAuth.authState;
	}

	public checkFbStore() {
		return this.afStore.collection('items').valueChanges();
	}

	public registerUser(email: string, password: string) {
		return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
			.then((res: FirebaseFirestore) => {
				return this.getFbToken();
			})
			.catch((err) => {
				console.log('40 -- sign up error: ', err);
			});
	}

	public signinUser(email: string, password: string) {
		return this.afAuth.auth.signInWithEmailAndPassword(email, password)
			.then((res: FirebaseFirestore) => {
				console.log('47 -- login response: ', res);
				return this.getFbToken();
			})
			.catch((err) => {
				console.log('51 -- sign up error: ', err);
			});
	}

	public signOut() {
		this.fbToken = '';
		this.afAuth.auth.signOut();
	}

	public getFbToken() {
		if (this.afAuth.auth.currentUser) {
			this.afAuth.auth.currentUser.getIdToken()
				.then(
					(token: string) => {
						this.fbToken = token;
					}
				)
				.catch(() => {
					console.log('69 -- no login, so no token.');
				});
			return this.fbToken;
		} else {
			return 'No Token';
		}
	}

	isAuthenticated() {
		/* const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.isLoggedIn);
			}, 800);
		});
		return promise; */
		const promise = new Promise((resolve, reject) => {
			resolve(typeof (this.fbToken) === 'string' && this.fbToken.length > 1);
		});
		return promise;
	};

	/* resetToken() {
		this.fbToken = '';
	} */

}
