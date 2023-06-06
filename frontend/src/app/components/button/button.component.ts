// angular
import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
})
export class ButtonComponent {
	// * required props *
	@Input() title: string;

	// optional props
	@Input() disabled = false;
	@Input() clickOutside: { enabled: boolean; cb: () => void } = {
		enabled: false,
		cb: () => {},
	};
	@Input() href: string = '';
	@Input() icon: string | null = null;
	@Input() iconSize = 18;
	@Input() isCentered = false;
	@Input() isFullWidth = false;
	@Input() isNoFollow = false;
	@Input() isSelected = false;
	@Input() isTooltipActive = false;
	@Input() kind: 'primary' | 'secondary' | 'tertiary' = 'primary';
	@Input() loading = false;
	@Input() selectedClasses = 'header-link-active';
	@Input() size: 'sm' | 'md' | 'lg'  = 'md';
	@Input() spaceIconBetween = false;
	@Input() tooltipAlignment: 'start' | 'center' | 'end' = 'center';
	@Input() tooltipPosition: 'top' | 'bottom' = 'bottom';
	@Input() type: 'icon' | 'full' = 'full';

	// output props
	@Output() onButtonClick = new EventEmitter();
	@Output() onButtonMouseEnter = new EventEmitter();
	@Output() onButtonMouseLeave = new EventEmitter();

	// fns
	onClick() {
		this.onButtonClick.emit();
	}
	onMouseEnter() {
		this.onButtonMouseEnter.emit();
		this.isTooltipActive = true;
	}
	onMouseLeave() {
		this.onButtonMouseLeave.emit();
		this.isTooltipActive = false;
	}

	isInactive = this.loading || this.disabled;
}
