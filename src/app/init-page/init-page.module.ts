import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InitPageRoutingModule } from './initpage-routing.module';

import { ShortenPipe } from '../../pipes/shorten.pipe';
import { FilterArrayPipe } from '../../pipes/filter-array.pipe';
import { InitPageContentComponent } from './init-page-compo/init-page-content.component';

import { CrudService } from '../../services/crud.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		InitPageRoutingModule
	],
	declarations: [
		InitPageContentComponent,
		ShortenPipe,
		FilterArrayPipe
	],
	providers: [
		CrudService
	],
	exports: [
		InitPageContentComponent
	]
})
export class InitPageModule { }
