import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { PaymentListComponent } from './payment-list/payment-list.component';

const routes: Routes = [
 
{path: 'payment', component: PaymentListComponent},
  {path: '', redirectTo: 'payment', pathMatch: 'full'},
  {path: 'create-payment', component: CreatePaymentComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
