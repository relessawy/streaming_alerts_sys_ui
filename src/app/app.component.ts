import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  faChartPie,
  faTable,
  IconDefinition,
  faLaptop,
  faShoppingCart,
  faHandHoldingUsd,
  faCheckCircle,
  faFileInvoiceDollar,
  faEraser,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons/';
import { MessageItem } from './message/message-item';
import { MessageHistoryService } from './message/message-history.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chartIcon: IconDefinition;
  tableIcon: IconDefinition;
  formIcon: IconDefinition;
  laptopIcon: IconDefinition;
  shoppingCartIcon: IconDefinition;
  handIcon: IconDefinition;
  checkIcon: IconDefinition;
  orderIcon: IconDefinition;
  status: boolean = false;
  eraseIcon: IconDefinition;
  logoutIcon: IconDefinition;
  sidebarVisible: boolean;
  username: string;
  messages: MessageItem[];
  requestOffersOn: boolean=false;
  requestLaptopOn: boolean=false;
  prepareOffersOn: boolean=false;
  approveOffersOn: boolean=false;
  viewOrdersOn: boolean=false;
  

  constructor(private messageHistoryService: MessageHistoryService) {
    this.chartIcon = faChartPie;
    this.tableIcon = faTable;
    this.laptopIcon = faLaptop;
    this.shoppingCartIcon=faShoppingCart;
    this.handIcon=faHandHoldingUsd;
    this.checkIcon=faCheckCircle;
    this.orderIcon=faFileInvoiceDollar;
    this.eraseIcon = faEraser;
    this.logoutIcon = faSignOutAlt;
    this.sidebarVisible = true;
    this.messages = new Array();
    this.username = '';
    this.setHomeMenu();
  }
  
  clickEvent(){
      this.status = !this.status;       
  }

  clear() {
    this.messageHistoryService.clear();
  }

  
  ngOnInit(): void {
    this.messages = this.messageHistoryService.getHistory();
  }

  

  setEmployeeHomeMenu(){
    this.requestOffersOn=false;
    this.requestLaptopOn=true;
    this.prepareOffersOn=false;
    this.approveOffersOn=false;
    this.viewOrdersOn=true;
  } 

  setHomeMenu(){
    this.requestOffersOn=false;
    this.requestLaptopOn=false;
    this.prepareOffersOn=false;
    this.approveOffersOn=false;
    this.viewOrdersOn=false;
  } 

  setHomeProcurementMenu(){
    this.requestOffersOn=true;
    this.requestLaptopOn=false;
    this.prepareOffersOn=false;
    this.approveOffersOn=true;
    this.viewOrdersOn=true;
  } 

  setSupplierMenu(){
    this.requestOffersOn=false;
    this.requestLaptopOn=false;
    this.prepareOffersOn=true;
    this.approveOffersOn=false;
    this.viewOrdersOn=false;
  } 

}
