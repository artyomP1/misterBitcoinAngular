import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ListComponent } from "./list/list.component";
import { ContactPrevComponent } from "./contact-prev/contact-prev.component";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { HeaderComponent } from "./header/header.component";
import { StatisticPageComponent } from "./statistic-page/statistic-page.component";
import { SignupComponent } from "./signup/signup.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomePageComponent,
    ListComponent,
    ContactPrevComponent,
    ContactDetailsComponent,
    HeaderComponent,
    StatisticPageComponent,
    SignupComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
