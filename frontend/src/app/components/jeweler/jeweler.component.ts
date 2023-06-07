// angular
import { Component, Input } from '@angular/core';

// lib
import { kebabCase } from '../../../lib/utilities/string/index';

// types
import type { Jeweler } from '../../types/Jeweler';

@Component({
	selector: 'app-jeweler',
	templateUrl: './jeweler.component.html',
})
export class JewelerComponent {
	kebabCase = kebabCase;
	@Input() jeweler: Jeweler;
}
