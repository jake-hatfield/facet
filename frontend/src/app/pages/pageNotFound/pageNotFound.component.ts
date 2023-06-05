import { Component, Input } from '@angular/core';

@Component({
	templateUrl: './pageNotFound.component.html',
})
export class PageNotFoundComponent {
	@Input() value: string;
}
