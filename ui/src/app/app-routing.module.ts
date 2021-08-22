import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentLinksComponent } from './payment-links/payment-links.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/paymentlinks', pathMatch: 'full' },  
  { path: 'paymentlinks', component: PaymentLinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
