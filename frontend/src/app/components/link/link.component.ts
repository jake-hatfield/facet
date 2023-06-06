import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-link',
	templateUrl: './link.component.html',
})
export class LinkComponent {
	// required props
	@Input() href: string;
	@Input() title: string;

	// optional props
	disabled = false;
	isBlock = false;
	isExternal = false;
	isNoFollow = false;
	isUnderlined = false;
}
