import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TabModel } from '../../contracts/models/tabs-class';

import { FbAuthService } from '../../services/auth/fb-auth.service';

@Component({
	selector: 'app-nested-content',
	templateUrl: './next-content.component.html',
	styleUrls: ['./next-content.component.scss']
})
export class NextContentComponent implements OnInit {

	tabs: TabModel[] = [
		{
			header: 'header1',
			content: 'First tab'
		},
		{
			header: 'header2',
			content: 'Second tab'
		},
		{
			header: 'header3',
			content: 'Third tab'
		}
	];

	constructor(
		private router: Router,
		private aRoute: ActivatedRoute,
		private fbAuthService: FbAuthService
	) { }

	ngOnInit() { }

	goInitPage() {
		// use relative route (relativeTo) is unnecessary, due to '' is root route.
		// { relativeTo: this.aRoute } is example only, and it works.
		// if you donot use it, that is OK.
		this.router.navigate([''], { relativeTo: this.aRoute });
	}

	goUsersPage() {
		this.router.navigate(['users']);
	}

	goEditFirstChair(id: number) {
		this.router.navigate(['/chairs', id, 'edit'], {
			queryParams: {
				allowEdit: '0' // why is 0, because only id === 3, is allowed. Define it manully.
			},
			fragment: 'loading'
		});
	}

	onLogin() {
		this.fbAuthService.signOut();
		this.router.navigate(['/authForm']);
	}

	onLogout() {
		this.fbAuthService.signOut();
	}

}
