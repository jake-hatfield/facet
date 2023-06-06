// angular
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

// services
import { UiService } from '../../services/ui.service';

@Component({
	templateUrl: './index.component.html',
})
export class IndexComponent {
	@Input() value: string;

	isModalActive: boolean;
	subscription: Subscription;

	constructor(private uiService: UiService) {
		this.subscription = this.uiService
			.onToggleModal()
			.subscribe((value) => (this.isModalActive = value));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe;
	}

	toggleModal() {
		this.uiService.toggleModal();
	}
}
