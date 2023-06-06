// angular
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UiService {
	private isModalActive = false;
	private subject = new Subject<any>();

	toggleModal(): void {
		this.isModalActive = !this.isModalActive;
		this.subject.next(this.isModalActive);
	}

	onToggleModal(): Observable<any> {
		return this.subject.asObservable();
	}
}
