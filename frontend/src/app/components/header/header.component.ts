// angular
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

// services
import { UiService } from '../../services/ui.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
})
export class HeaderComponent {
	links = [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' },
	];
	isModalActive = false;
	subscription: Subscription;

	constructor(private uiService: UiService) {
		this.subscription = this.uiService
			.onToggleModal()
			.subscribe((value) => (this.isModalActive = value));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	toggleModal() {
		this.uiService.toggleModal();
	}
}
