import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../contracts/models/user-class';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html'
})
export class UsersComponent {
	users: User[] = [
		{
			id: 1,
			name: 'Max'
		},
		{
			id: 2,
			name: 'Anna'
		},
		{
			id: 3,
			name: 'Chris'
		}
	];

	constructor(
		private router: Router,
		private aRoute: ActivatedRoute
	) { }

	goParentRoute() {
		this.router.navigate(['/next-compo'], { relativeTo: this.aRoute });
	}
}
