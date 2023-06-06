// angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
})
export class FooterComponent {
	// required props
	@Input() expanded: boolean;
	@Output() manualToggle = new EventEmitter();

	// optional props
	resourceLinks = [{ title: 'About', href: '/about' }];
	year = new Date().getFullYear();

	toggle() {
		this.manualToggle.emit();
	}
}
