import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { FormsModule } from '@angular/forms';
import { PagePipe } from './page.pipe';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    PaymentListComponent,
    CreatePaymentComponent,
    PagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
