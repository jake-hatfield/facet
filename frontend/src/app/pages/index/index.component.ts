import { Component, Input } from '@angular/core';

@Component({
	templateUrl: './index.component.html',
})
export class IndexComponent {
	@Input() value: string;
}
