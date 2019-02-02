# A7Collection

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Create a7 pj with scss
```
ng new pj-name --style=scss
or
ng new pj-name --style=sass
or
ng new pj-name --style=scss && cd pj-name && git init && touch npm-install.txt __package-sample.json
Then
cp npm-install.txt and __package-sample.json to New Pj Folder
```

## User Https for localhost
RSC: [Angular CLI To Apply Https](https://medium.com/@rubenvermeulen/running-angular-cli-over-https-with-a-trusted-certificate-4a0d5f92747a)
```
1. go one step outside, then cd generate-trusted-ssl-certificate-master, 
Change C(Country) to AU, Change ST(State) to VCT and L to anything, 
then run cmd: bash generate.sh
2. cp server.crt and server.key to your pj foler, mkdir ssl, then paste them in ssl folder.
3. double click server.srt, (may need input system password) --> double click localhost certificate,
click trust, then choose always trust.
4. Now, you have to completely close your browser and reopen again, no matter what.
6. run ng serve --ssl, then go browsers go this url https://localhost:4200/, you will see app run on https.
7. one hint, if u use incognito mode of chrome, it is ok.
8. one hint, if u run normal mode of chrome, it will do infinite reload, looks like chorme has problem.
9. if you have to use redux devtool for debuging, then use ng serve without --ssl.
10. https://localhost:4200/
```

## You can find all possible blueprints in the table below:

Scaffold  | Usage
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g guard my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g enum my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`

## how to solve problem: More than one module matches.
ng g c new-component --module app

### donot need spec ng g c compoName --spac false

### firebase basic auth url: https://backend-pjname.firebaseio.com/filename.json?auth=token

## These 3 are for universal-rendering
npm i -S ![Status: **@angular/platform-server @nguniversal/module-map-ngfactory-loader ts-loader**](http://placehold.it/350x30/FF0000/FFFF00.png&text=@angular/platform-server @nguniversal/module-map-ngfactory-loader ts-loader)
check here --> [Universal-Rendering](https://github.com/angular/angular-cli/wiki/stories-universal-rendering)
cp and paste these to new angular-cli pj. tsconfig.json universal.rendering.server.ts webpack.server.config.js tsconfig.server.json main.server.ts app.server.module.ts --> cp 2nd obj in apps of angular.json and paste to new angular.json and modified styles and scripts


## After you init pj -- Step 1 N 2
1st: npm init -y to create package.json, then modified it according to __package-sample.json. goes into src/app folder --> cd src/app/ && touch app-routing.module.ts operators.ts && cd ../../ 
--> add app-routing.module.ts, and cp and paste content, then add operators.ts and cp and paste content, last one is compare tsconfig.json --> .gitignore at bottom add these 3
semantic/
semantic.json
angular.json
src/environments/firebase.config.ts
npm-install.txt
.editorconfig
README.md

2nd: ng g m share-module && ng g c sidebar-outlet && cd ../../../ --> cp and paste share-module.module.ts and sidebar-outlet component, then adjust app.module.ts --> then cp and paste entire not-found module, then adjust app.module.ts


## app.module.ts
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// firebase
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// END firebase

import { SharedModule } from './share-module/share-module.module';
import { AppRoutingModule } from './app-routing.module';
import { SuiModule } from 'ng2-semantic-ui';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ClickOutsideModule } from 'ng-click-outside';
import { TextMaskModule } from 'angular2-text-mask';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { InitPageModule } from './init-page/init-page.module';
import { FormGroupPipeI18nTooltipPopoverModalModule } from './form-related/formGroupPipeI18nTooltipPopoverModal.module';
// it have to be place at the end of all other modules, since other modules may have children routes.
import { NotFoundModule } from './not-found/not-found.module';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		// if ur form in other module, inject these 2 into the other module
		// form name must be public
		/* ReactiveFormsModule,
		FormsModule, */
		AngularFireModule.initializeApp(FirebaseConfig.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		SharedModule,
		AppRoutingModule,
		SuiModule,
		NgxSpinnerModule,
		RoundProgressModule,
		ClickOutsideModule,
		TextMaskModule,
		AgmCoreModule.forRoot(
			{
				apiKey: 'AIzaSyBeYVe4dN0JTNcmgSdXTb6t-cCXEucUtwU'
			}
		),
		InitPageModule,
		FormGroupPipeI18nTooltipPopoverModalModule,
		NotFoundModule
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' },
		CookieService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
```

## Step 3
```diff
+ unique compoents go featureComponents in green
- share components go shareComponents in red
+ external service only has auth and crud services/external/{auth | crud} in green
- internal service only works for internal modules sync data or event in red
```
3rd: 
-- cp and paste service auth and internal to new pj, then adjust app.module.ts
-- cd src/ && mkdir services validators contracts pipes featureComponents shareComponents helpers directives && cd ./services/ && mkdir crud && cd ../assets/ && mkdir imgs logos && cd ../contracts/ && mkdir models interfaces && cd ../components && mkdir graph-charts

## tslint.json
```javascript
"indent": [
	true,
	"tabs",
	4
],
```

Install Bootstrap or ng2-semantic-ui(prefer this, no jquery required.), you can include css and js in angular.json
### bootstrap in angular.json
```javascript
"styles": [
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.scss"
],
"scripts": [
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
---
### ng2-semantic-ui in angular.json --Dependencies angular7 and Semantic UI CSS
it will create new folder called semantic or semanticui, enter it, run gulp build. then you get dist folder under it.
```javascript
"styles": [
    "semantic/dist/semantic.min.css",
    "src/styles.scss"
],
"scripts": []
```
---
### For moment tether popper.js in angular.json
moment tether popper.js
```javascript
"scripts": [
    "./node_modules/moment/min/moment.min.js",
    "./node_modules/tether/dist/js/tether.min.js",
    "./node_modules/popper.js/dist/umd/popper.min.js"
]
```
---

### For chart.js
```javascript
import Chart from 'chart.js';
```
---

### For intl -- this is too old, use angular-intl
in polyfills.ts, uncomment these 2 at bottom.
Rendering --> [Angular-Intl](https://www.npmjs.com/package/angular-intl)
```javascript
```
---
