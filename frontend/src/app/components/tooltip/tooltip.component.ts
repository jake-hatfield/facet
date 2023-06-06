import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-tooltip',
	templateUrl: './tooltip.component.html',
})
export class TooltipComponent {
	// required props
	@Input() title: string;

	// optional props
	@Input() alignment: 'start' | 'center' | 'end' = 'center';
	@Input() position: 'top' | 'bottom' = 'bottom';
	@Input() size: 'sm' | 'md' | 'lg' | 'field' = 'md';
}
