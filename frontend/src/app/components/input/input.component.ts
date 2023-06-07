// angular
import { Component, Input, Output } from '@angular/core';

type HTMLInputTypes =
	| 'button'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
})
export class InputComponent {
	// required props
	@Input() id: string;
	@Input() type: HTMLInputTypes;
	@Input() placeholder: string;

	// optional props
	@Input() hasInlineButton = false;
	@Input() hasIncrementDecrement = false;
	@Input() error = '';
	@Input() helperText = '';
	@Input() isLabelHidden = false;
	@Input() isPassword = false;
	@Input() isRequired = false;
	@Input() isReadOnly = false;
	@Input() showPasswordText = false;
	@Input() label = '';
	@Input() max = 0;
	@Input() min = 0;
	@Input() units = '';
	@Input() value: string = '';

	//
	@Input() onChange = (e: any) => {};
	@Input() onInput = (e: any) => {};

	// fns
	@Output() handleChange = (e: any) => {
		this.onChange(e);
	};

	@Output() handleInput = (e: any) => {
		let target = e.target as HTMLInputElement;

		if (!this.validateInput(target)) return;

		// update the value
		this.value = target.value;
		this.onInput(e);
	};

	@Output() validateInput = (target: HTMLInputElement) => {
		if (this.type === 'number') {
			if (!this.validateNumberInput(target)) return false;
		}

		return true;
	};

	@Output() validateNumberInput = (target: HTMLInputElement) => {
		if (+target.value < this.min) {
			target.value = this.min.toString();
			this.value = this.min.toString();
			return false;
		}

		if (+target.value > this.max) {
			target.value = this.max.toString();
			this.value = this.max.toString();
			return false;
		}

		return true;
	};

	ngOnInit() {
		if (this.type === 'number') {
			if (!this.min && !this.max)
				throw new Error('Min and max values must be included');

			if (+this.value > this.max || +this.value < this.min) {
				throw new Error(
					`Value for input ID: '${this.id}' can't exceed max or min`
				);
			}
		}
	}
}
