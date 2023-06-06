// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CityComponent } from './pages/city/city.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { LinkComponent } from './components/link/link.component';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
	declarations: [
		AppComponent,
		CardComponent,
		CityComponent,
		FooterComponent,
		HeaderComponent,
		IndexComponent,
		PageNotFoundComponent,
		LinkComponent,
		SearchInputComponent,
		ButtonComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
