// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { AppComponent } from './app.component';
import { CityComponent } from './pages/city/city.component';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';

const routes: Routes = [
	{
		path: '',
		children: [{ path: `city`, component: CityComponent }],
	},
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
