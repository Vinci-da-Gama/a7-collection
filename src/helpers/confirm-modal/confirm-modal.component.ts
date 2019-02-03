import { SuiModal, ComponentModalConfig, ModalSize } from 'ng2-semantic-ui';
import { Component } from '@angular/core';

import { ConfirmModalContextInterface } from '../../contracts/interfaces/confirm-modal.interface';

@Component({
	selector: 'app-confirm-modal',
	templateUrl: './confirm-modal.component.html',
	styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

	constructor(
		public modal: SuiModal<ConfirmModalContextInterface, void, void>
	) { }

}
export class ConfirmModal extends ComponentModalConfig<ConfirmModalContextInterface, void, void> {
	constructor(title: string, question: string, size = ModalSize.Normal) {
		console.log(ModalSize.Normal);
		super(ConfirmModalComponent, { title, question });

		this.isClosable = false;
		this.transitionDuration = 200;
		this.size = size;
	}
}
