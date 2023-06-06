import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

// services
import { UiService } from '../../services/ui.service';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
})
export class ModalComponent {
	@Input() hasAction = false;
	@Input() isModalActive = false;
	subscription: Subscription;
	@Input() title: string;

	constructor(private uiService: UiService) {}

	toggleModal() {
		this.uiService.toggleModal();
	}
}
