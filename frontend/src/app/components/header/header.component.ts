// angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
})
export class HeaderComponent {
	links = [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' },
	];

	@Input() expanded: boolean;
	@Output() manualToggle = new EventEmitter();

	toggle() {
		this.manualToggle.emit();
	}
}
