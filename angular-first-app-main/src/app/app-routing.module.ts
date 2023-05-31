import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ManageReservationComponent } from './manage-reservation/manage-reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flights', component: SearchResultsComponent },
  { path: 'reservation', component: ManageReservationComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
