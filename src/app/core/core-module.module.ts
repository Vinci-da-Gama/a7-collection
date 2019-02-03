import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { CommonModule, APP_BASE_HREF, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SuiModule } from 'ng2-semantic-ui';
import { SidebarOutletComponent } from './sidebar-outlet/sidebar-outlet.component';

import { CookieService } from 'ngx-cookie-service';
import { FbAuthService } from '../../services/auth/fb-auth.service';
import { AuthGuardService } from '../../services/auth/auth-guard.service';
import { CanDeactivateService } from '../../services/internal/can-deactivate.service';
import { ChairResolveService } from '../../services/chairs/chair-resolve.service';
import { SubjectDataTransactionService } from '../../services/internal/subject-data-transaction.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		SuiModule,
		BrowserAnimationsModule
	],
	declarations: [SidebarOutletComponent],
	exports: [SidebarOutletComponent, CommonModule, RouterModule],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' },
		CookieService, FbAuthService, AuthGuardService,
		CanDeactivateService, ChairResolveService,
		SubjectDataTransactionService
	]
})
export class CoreModule {
	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		@Inject(APP_ID) private appId: string) {
		const platform = isPlatformBrowser(platformId) ?
			'in the browser' : 'on the server';
		console.log(`Running ${platform} with appId=${appId}`);
	}
}
