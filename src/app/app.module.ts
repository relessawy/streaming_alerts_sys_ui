import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskComponent } from './task/task.component';
import { StartComponent } from './start/start.component';
import { ProcessComponent } from './process/process.component';
import { ApproveComponent } from './approve/approve.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ManagementComponent } from './management/management.component';
import { PipeComponent } from './pipe/pipe.component';
import { SupplierOfferComponent } from './supplier-offer/supplier-offer.component';
import { ApproveOfferComponent } from './approve-offer/approve-offer.component';
import { RequestLaptopComponent } from './request-laptop/request-laptop.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { ProcurementmanagerhomeComponent } from './procurementmanagerhome/procurementmanagerhome.component';
import { SupplierhomeComponent } from './supplierhome/supplierhome.component';
import { RequestofferComponent } from './requestoffer/requestoffer.component';
import { PrepareofferComponent } from './prepareoffer/prepareoffer.component';
import { LaptoprequestsComponent } from './laptoprequests/laptoprequests.component';
import { OfferRequstsComponent } from './offer-requsts/offer-requsts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BreadcrumbComponent,
    SidebarComponent,
    TaskComponent,
    StartComponent,
    ProcessComponent,
    ApproveComponent,
    ManagementComponent,
    SupplierComponent,
    PipeComponent,
    SupplierOfferComponent,
    ApproveOfferComponent,
    RequestLaptopComponent,
    EmployeehomeComponent,
    ProcurementmanagerhomeComponent,
    SupplierhomeComponent,
    RequestofferComponent,
    PrepareofferComponent,
    LaptoprequestsComponent,
    OfferRequstsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes,{ onSameUrlNavigation: 'reload' }),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
