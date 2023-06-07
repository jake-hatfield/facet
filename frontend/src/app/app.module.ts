// angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// routing
import { AppRoutingModule } from './app-routing.module';

// packages
import { NgIconsModule } from '@ng-icons/core';
import { heroExclamationCircle, heroMagnifyingGlass, heroXMark } from '@ng-icons/heroicons/outline';

// components
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CityComponent } from './pages/city/city.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { InputComponent } from './components/input/input.component';
import { JewelersComponent } from './components/jewelers/jewelers.component';
import { JewelerComponent } from './components/jeweler/jeweler.component';
import { LinkComponent } from './components/link/link.component';
import { ModalComponent } from './components/modal/modal.component';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
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
        InputComponent,
		JewelerComponent,
		JewelersComponent,
		LinkComponent,
		ModalComponent,
		PageNotFoundComponent,
        TooltipComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
        FormsModule,
		NgIconsModule.withIcons({ heroExclamationCircle, heroMagnifyingGlass, heroXMark }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
