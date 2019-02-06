import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// firebase
import { AngularFireModule } from '@angular/fire';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// END firebase

import { CoreModule } from './core/core-module.module';
import { MusaxiRoutingModule } from './musaxi-routing.module';
import { SuiModule } from 'ng2-semantic-ui';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { StarRatingModule } from 'angular-star-rating';
// import { RoundProgressModule } from 'angular-svg-round-progressbar';
// import { ClickOutsideModule } from 'ng-click-outside';
// import { AgmCoreModule } from '@agm/core';
import { MusaxiComponent } from './musaxi.component';
import { InitPageModule } from './init-page/init-page.module';
import { TextMaskModule } from 'angular2-text-mask';
// import { FormGroupPipeI18nTooltipPopoverModalModule } from './form-related/formGroupPipeI18nTooltipPopoverModal.module';
// import { InputOutputMapChartRoundprocessModule } from './IO-MapChart-Rprocess/inputOutputMapChartRoundprocess.module';
// import { CoPCookieMomentSliderModule } from './clickoutPopoverCookieMomentStartSlider/copopoverCkmoSs.module';
// import { ValPassEncapsuElemContentRefDirecModule } from './valPassEncapsuElemContentRefDirec/val-pass-encapsu-elem-content-ref-direc.module';
// import { RouterRelatedModule } from './router-related/router-related.module';
// import { ObservableSubscriptionSubjectModule } from './observable-subscription-subject-animation/observable-subscription-subject.module';
// import { CanLazyloadEnvPathFormMoreBackendErrorhandlModule } from './lazyLoad-canload-envPathSetup-formMore-HttpXhrBackend-Errorhandler/lcefhe.module';
import { NotFoundModule } from './not-found/not-found.module';


@NgModule({
	declarations: [
		MusaxiComponent
	],
	imports: [
		BrowserModule,
		BrowserModule.withServerTransition({ appId: 'anytextasid-you-like' }),
		HttpClientModule,
		/* ReactiveFormsModule,
		FormsModule, */
		AngularFireModule.initializeApp(FirebaseConfig.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		CoreModule,
		MusaxiRoutingModule,
		SuiModule,
		NgxSpinnerModule,
		/* StarRatingModule.forRoot(),
		RoundProgressModule,
		ClickOutsideModule,
		AgmCoreModule.forRoot(
			{
				apiKey: 'AIzaSyBeYVe4dN0JTNcmgSdXTb6t-cCXEucUtwU'
			}
		), */
		InitPageModule,
		/* FormGroupPipeI18nTooltipPopoverModalModule,
		InputOutputMapChartRoundprocessModule,
		CoPCookieMomentSliderModule,
		ValPassEncapsuElemContentRefDirecModule,
		RouterRelatedModule,
		ObservableSubscriptionSubjectModule,
		CanLazyloadEnvPathFormMoreBackendErrorhandlModule, */
		NotFoundModule
	],
	// providers: [],
	bootstrap: [MusaxiComponent]
})
export class MusaxiModule {}
