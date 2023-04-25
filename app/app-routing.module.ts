
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { CreateAirlineComponent } from './create-airline/create-airline.component';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { AirlineDetailsComponent } from './airline-details/airline-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
const routes: Routes = [
  { path: 'airlines', component: AirlineListComponent },
  { path: 'create-airline', component: CreateAirlineComponent },
  { path: 'update-airline/:id', component: UpdateAirlineComponent },
  { path: 'airline-details/:id', component: AirlineDetailsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',component:LoginComponent},
  { path: 'signup',component:SignUpComponent},
  { path: 'home',component:HomeComponent},
  { path: 'forgot-password',component:ForgotPasswordComponent},
  { path: 'contact-us', component:ContactUsComponent},
  { path: 'about-us',component:AboutUsComponent},
  { path: 'feedback',component:FeedbackComponent},
  { path: 'bookticket/:id',component:BookticketComponent},
  { path: 'profilecard',component:ProfilecardComponent},
  { path: 'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
