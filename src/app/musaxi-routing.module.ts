import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuardService } from '../services/auth/auth-guard.service';

const generalRoutes: Routes = [
	/* define app module routes here, e.g., to lazily load a module
	   (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
	 */
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{
		path: 'authForm',
		loadChildren: './form-related/formGroupPipeI18nTooltipPopoverModal.module#FormGroupPipeI18nTooltipPopoverModalModule'
	},
	{
		path: 'map-exchangeRage',
		loadChildren: './IO-MapChart-Rprocess/inputOutputMapChartRoundprocess.module#InputOutputMapChartRoundprocessModule',
		canLoad: [AuthGuardService]
	},
	{
		path: 'slicer-clickoutpopover-moment',
		loadChildren: './clickoutPopoverCookieMomentStartSlider/copopoverCkmoSs.module#CoPCookieMomentSliderModule'
	},
	{
		path: 'valpass-contentelemRef-dir-encapsu',
		loadChildren: './valPassEncapsuElemContentRefDirec/val-pass-encapsu-elem-content-ref-direc.module#ValPassEncapsuElemContentRefDirecModule'
	},
	{
		path: 'valpass-contentelemRef-dir-encapsu',
		loadChildren: './valPassEncapsuElemContentRefDirec/val-pass-encapsu-elem-content-ref-direc.module#ValPassEncapsuElemContentRefDirecModule'
	},
	{
		path: 'mainAboutRouter',
		loadChildren: './router-related/router-related.module#RouterRelatedModule'
	},
	{
		path: 'oss',
		loadChildren: './observable-subscription-subject-animation/observable-subscription-subject.module#ObservableSubscriptionSubjectModule'
	},
	{
		path: 'icefhe',
		loadChildren: './lazyLoad-canload-envPathSetup-formMore-HttpXhrBackend-Errorhandler/lcefhe.module#CanLazyloadEnvPathFormMoreBackendErrorhandlModule'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(generalRoutes, {
			useHash: true,
			preloadingStrategy: PreloadAllModules
		})
	],
	exports: [RouterModule]
})
export class MusaxiRoutingModule { }
