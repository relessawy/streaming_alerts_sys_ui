import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TaskComponent } from "./task/task.component";
import { StartComponent } from "./start/start.component";
import { ProcessComponent } from "./process/process.component";
import { ApproveComponent } from "./approve/approve.component";
import { SupplierComponent } from "./supplier/supplier.component";
import { ManagementComponent } from "./management/management.component";
import { SupplierOfferComponent } from "./supplier-offer/supplier-offer.component";
import { ApproveOfferComponent } from "./approve-offer/approve-offer.component";
import { RequestLaptopComponent } from "./request-laptop/request-laptop.component";
import { EmployeehomeComponent } from "./employeehome/employeehome.component";
import { ProcurementmanagerhomeComponent } from "./procurementmanagerhome/procurementmanagerhome.component";
import { SupplierhomeComponent } from "./supplierhome/supplierhome.component";
import { RequestofferComponent } from "./requestoffer/requestoffer.component";
import { PrepareofferComponent } from "./prepareoffer/prepareoffer.component";
import { LaptoprequestsComponent } from "./laptoprequests/laptoprequests.component";
import { OfferRequstsComponent } from "./offer-requsts/offer-requsts.component";

export const AppRoutes: Routes = [
  {
    path: "employeeHome",
    component: EmployeehomeComponent,
    data: {
      breadcrumb: "Employee View",
    },
  },
  {
    path: "procurementmanagerHome",
    component: ProcurementmanagerhomeComponent,
    data: {
      breadcrumb: "Procurement Manager View",
    },
  },
  {
    path: "supplierHome",
    component: SupplierhomeComponent,
    data: {
      breadcrumb: "Supplier View",
    },
  },
  {
    path: "requestOffer",
    component: RequestofferComponent,
    data: {
      breadcrumb: "Request Offer",
    },
  },
  {
    path: "requestLaptop",
    component: RequestLaptopComponent,
    data: {
      breadcrumb: "Request Laptop",
    },
  },
  {
    path: "prepareOffer",
    component: PrepareofferComponent,
    data: {
      breadcrumb: "Prepare Offer",
    },
  },
  {
    path: "task",
    component: TaskComponent,
    data: {
      breadcrumb: "Laptop Requests",
    },
  },
  {
    path: "laptopRequests",
    component: LaptoprequestsComponent,
    data: {
      breadcrumb: "Laptop Requests",
    },
  },
  {
    path: "offerRequests",
    component: OfferRequstsComponent,
    data: {
      breadcrumb: "Offer Requests",
    },
  },
  {
    path: "approveoffersList",
    component: ApproveOfferComponent,
    data: {
      breadcrumb: "Approve Offers",
    },
  },
  {
    path: "approveOffer",
    component: ManagementComponent,
    data: {
      breadcrumb: "Approve Offer",
    },
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      breadcrumb: "Home",
    },
    children: [
      {
        path: "task",
        component: TaskComponent,
        data: {
          breadcrumb: "Laptop Requests",
        },
      },
      {
        path: "start",
        component: StartComponent,
        data: {
          breadcrumb: "Request Laptop",
        },
      },
      {
        path: "process",
        component: ProcessComponent,
        data: {
          breadcrumb: "Orders",
        },
      },
      {
        path: "approve",
        component: ApproveComponent,
        data: {
          breadcrumb: "Processes",
        },
      },
      {
        path: "supplier",
        component: SupplierComponent,
        data: {
          breadcrumb: "Processes",
        },
      },
      {
        path: "supplieroffer",
        component: SupplierOfferComponent,
        data: {
          breadcrumb: "Requests for Offers",
        },
      },
      {
        path: "approveoffer",
        component: ApproveOfferComponent,
        data: {
          breadcrumb: "Approve Offers",
        },
      },
      {
        path: "management",
        component: ManagementComponent,
        data: {
          breadcrumb: "Processes",
        },
      },
      {
        path: "requestLaptop",
        component: RequestLaptopComponent,
        data: {
          breadcrumb: "Request Laptop",
        },
      },
    ],
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" },
];
