import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RouterMainComponent } from './router.main/router.main.component';
import { NextContentComponent } from '../../featureComponents/next-compo/next-content.component';
import { UsersComponent } from '../../shareComponents/users/users.component';
import { UserComponent } from '../../shareComponents/user/user.component';
import { ChairsComponent } from '../../featureComponents/chairs/chairs.component';
import { ChairComponent } from '../../featureComponents/chair/chair.component';
import { EditChairComponent } from '../../featureComponents/edit-chair/edit-chair.component';

import { AuthGuardService } from '../../services/auth/auth-guard.service';
import { CanDeactivateService } from '../../services/internal/can-deactivate.service';
import { ChairResolveService } from '../../services/chairs/chair-resolve.service';

const routerRelatedRoute: Routes = [
	{
		path: '', component: RouterMainComponent, children: [
			{ path: 'next-compo', component: NextContentComponent },
			{
				path: 'users',
				canActivateChild: [AuthGuardService],
				component: UsersComponent,
				children: [
					{ path: ':id/:name', component: UserComponent }
				]
			},
			{
				path: 'chairs',
				/* usually donot block parent compo, u can block children compo */
				/* canActivate: [AuthGuardService],  */
				component: ChairsComponent,
				children: [
					{
						path: ':id', component: ChairComponent,
						resolve: {
							theChair: ChairResolveService
						}
					},
					{
						path: ':id/edit', component: EditChairComponent,
						canDeactivate: [CanDeactivateService]
					}
				]
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routerRelatedRoute)
	],
	exports: [RouterModule]
})
export class RouterRelatiedRouterModule { }
