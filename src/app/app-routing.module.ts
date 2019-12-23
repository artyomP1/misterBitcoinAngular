import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { StatisticPageComponent } from "./statistic-page/statistic-page.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "contact/:id",
    component: ContactDetailsComponent
  },
  {
    path: "statistic",
    component: StatisticPageComponent
  },
  {
    path: "signup",
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
