// angular
import { Component } from '@angular/core';

// types
import type { Jeweler } from '../../types/Jeweler';

@Component({
	selector: 'app-jewelers',
	templateUrl: './jewelers.component.html',
})
export class JewelersComponent {
	jewelers: Jeweler[] = [
		{ address: '123 Skillman Road', title: 'Hello World Diamonds' },
	];
}
