import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { CrudService } from '../../../services/crud.service';

@Component({
	selector: 'app-init-page-content',
	templateUrl: './init-page-content.component.html',
	styleUrls: ['./init-page-content.component.scss']
})
export class InitPageContentComponent implements OnInit {

	appStatus = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('affter 2 second -- status is online.');
		}, 2000);
	});

	receiveData = {};

	welcome: String = 'Welcome to';
	filteredStatus: String | string = '';
	servers = [
		{
			instanceType: 'medium',
			name: 'Production',
			status: 'stable',
			started: new Date(15, 1, 2017)
		},
		{
			instanceType: 'large',
			name: 'User Database',
			status: 'stable',
			started: new Date(15, 1, 2017)
		},
		{
			instanceType: 'small',
			name: 'Development Server',
			status: 'offline',
			started: new Date(15, 1, 2017)
		},
		{
			instanceType: 'small',
			name: 'Testing Environment Server',
			status: 'stable',
			started: new Date(15, 1, 2017)
		}
	];

	constructor(
		private curdService: CrudService
	) { }

	ngOnInit() { }

	getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
		return {
			'list-group-item-success': server.status === 'stable',
			'list-group-item-warning': server.status === 'offline',
			'list-group-item-danger': server.status === 'critical'
		};
	}

	onAddServer() {
		this.servers.push({
			instanceType: 'small',
			name: 'New Server',
			status: 'stable',
			started: new Date(15, 1, 2017)
		});
	}

}
