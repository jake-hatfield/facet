// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { AboutComponent } from './pages/about/about.component';
import { CityComponent } from './pages/city/city.component';
import { IndexComponent } from './pages/index/index.component';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: '', component: IndexComponent },
			{ path: `jewelers/:city`, component: CityComponent },
			{ path: `jewelers/:city/:jeweler`, component: CityComponent },
			{ path: `about`, component: AboutComponent },
		],
	},
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
