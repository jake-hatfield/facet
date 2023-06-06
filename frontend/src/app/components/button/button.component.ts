// angular
import { Component, Input, Output } from '@angular/core';

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
	@Input() icon = null;
	@Input() iconSize = 18;
	@Input() isCentered = false;
	@Input() isFullWidth = false;
	@Input() isNoFollow = false;
	@Input() isSelected = false;
	@Input() isTooltipActive = false;
	@Input() kind: 'primary' | 'secondary' | 'tertiary' | 'ghost' = 'primary';
	@Input() loading = false;
	@Input() selectedClasses = 'header-link-active';
	@Input() size: 'sm' | 'md' | 'lg' | 'field' = 'md';
	@Input() spaceIconBetween = false;
	@Input() tooltipAlignment: 'start' | 'center' | 'end' = 'center';
	@Input() tooltipPosition: 'top' | 'bottom' = 'bottom';
	@Input() type: 'icon' | 'full' = 'full';

	onClick = () => {};
	onMouseEnter = () => {};
	onMouseLeave = () => {};

	commonLayoutClasses = `flex items-center ${
		this.isCentered || this.type === 'icon'
			? 'justify-center'
			: this.spaceIconBetween
			? 'justify-between'
			: 'justify-center md:justify-start'
	} ${this.isFullWidth ? 'w-full' : 'w-fit'} ${
		this.size === 'sm'
			? 'py-1 px-1.5'
			: this.size === 'md'
			? this.type === 'icon'
				? 'py-[11px] px-3'
				: 'py-2.5 px-3'
			: this.size === 'lg'
			? 'p-3'
			: 'pt-[9px] pb-[9px] px-3 border-b border-transparent'
	}`;
	commonTypographyClasses = `${
		this.size === 'lg' ? 'text-base' : 'text-sm'
	} tracking-wide font-semibold`;
	commonStyleClasses = `${
		this.kind === 'primary'
			? 'bg-amber-300 text-neutral-900 hover:bg-amber-400 border-neutral-900'
			: this.kind === 'secondary'
			? 'bg-zinc-900 text-white hover:bg-zinc-950'
			: this.kind === 'tertiary'
			? 'bg-tan-100 text-white hover:bg-zinc-950 border-neutral-950'
			: 'bg-transparent hover:bg-neutral-900 hover:text-white'
	} border-2 ring-1 ring-transparent ring-inset focus:outline-none focus:ring-neutral-900 transition-colors duration-150`;
	@Output() isInactive = this.loading || this.disabled;
	@Output() classes = `
    ${this.commonLayoutClasses} ${this.commonTypographyClasses} ${
		this.isInactive
			? 'cursor-not-allowed bg-neutral-500 text-neutral-700'
			: this.commonStyleClasses
	}`;
}
