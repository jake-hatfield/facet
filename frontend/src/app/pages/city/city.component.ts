// angular
import { Component, Input } from '@angular/core';

@Component({
	templateUrl: './city.component.html',
})
export class CityComponent {
	city = 'Houston, Texas';

	// required props
	@Input() value: string;
}
