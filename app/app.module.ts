
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { AirlineListComponent } from './airline-list/airline-list.component'; 
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAirlineComponent } from './create-airline/create-airline.component'; 
import { UpdateAirlineComponent } from './update-airline/update-airline.component'; 
import { AirlineDetailsComponent } from './airline-details/airline-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';

@NgModule({ 
  declarations: [ 
    AppComponent, 
    AirlineListComponent, 
    CreateAirlineComponent, 
    UpdateAirlineComponent, 
    AirlineDetailsComponent, LoginComponent, LogoutComponent, SignUpComponent, ForgotPasswordComponent, ContactUsComponent, AboutUsComponent, HomeComponent, FeedbackComponent, BookticketComponent, ProfilecardComponent,
  ], 
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { }
