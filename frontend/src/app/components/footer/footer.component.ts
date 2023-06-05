// angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
})
export class FooterComponent {
	@Input() expanded: boolean;
	@Output() manualToggle = new EventEmitter();

	toggle() {
		this.manualToggle.emit();
	}
}
