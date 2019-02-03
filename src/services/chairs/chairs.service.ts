import { Injectable } from '@angular/core';
import { ChairInterface } from '../../contracts/interfaces/chair-interface';

@Injectable()
export class ChairsService {

	private chairsCollection: ChairInterface[] = [
		{
			id: 1,
			name: 'ProductionChair',
			status: 'good'
		},
		{
			id: 2,
			name: 'TestChair',
			status: 'medium'
		},
		{
			id: 3,
			name: 'DevChair',
			status: 'poor'
		}
	];

	constructor() { }

	fetchChairs() {
		return this.chairsCollection;
	}

	getChairById(id: number) {
		const chairWithId = this.chairsCollection.find(
			(c) => {
				return c.id === id;
			}
		);
		if (chairWithId) {
			return chairWithId;
		} else {
			alert('No chair with this id.');
			return;
		}
	}

	updateChair(id: number, chairInfo: { name: string, status: string }) {
		const targetChair = this.chairsCollection.find(
			(c: ChairInterface) => {
				return c.id === id;
			}
		);
		console.log('target chair: ', targetChair);
		if (targetChair) {
			targetChair.name = chairInfo.name;
			targetChair.status = chairInfo.status;
		} else {
			alert('No chair with this id.');
			return;
		}
	}

}
