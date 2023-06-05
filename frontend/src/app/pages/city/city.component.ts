import { Component, Input } from '@angular/core';

@Component({
	templateUrl: './city.component.html',
})
export class CityComponent {
	@Input() value: string;
}
