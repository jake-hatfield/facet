// angular
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// components
import { PageNotFoundComponent } from './pageNotFound.component';

describe('PageNotFoundComponent', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [PageNotFoundComponent],
		})
	);
});
