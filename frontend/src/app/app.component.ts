// angular
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

// services
import { UiService } from './services/ui.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	title = '@facet';

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
