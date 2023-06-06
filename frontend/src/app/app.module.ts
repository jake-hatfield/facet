// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routing
import { AppRoutingModule } from './app-routing.module';

// packages
import { NgIconsModule } from '@ng-icons/core';
import { heroMagnifyingGlass, heroXMark } from '@ng-icons/heroicons/outline';

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
import { JewelersComponent } from './components/jewelers/jewelers.component';
import { JewelerComponent } from './components/jeweler/jeweler.component';
import { ModalComponent } from './components/modal/modal.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
	declarations: [
		AppComponent,
		ButtonComponent,
		CardComponent,
		CityComponent,
		FooterComponent,
		HeaderComponent,
		IndexComponent,
		JewelerComponent,
		JewelersComponent,
		LinkComponent,
		PageNotFoundComponent,
		SearchInputComponent,
		ModalComponent,
  TooltipComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		NgIconsModule.withIcons({ heroMagnifyingGlass, heroXMark }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
