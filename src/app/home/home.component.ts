import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { KieService } from "../kie.service";
import { MessageService } from "../message/message.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  threshold: number;
  alertName: string;
  location: string;
  startDate: Date;
  endDate: Date;
  constructor(
    private kieService: KieService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {}

  submit() {
    this.kieService.startProcess(this.alertName,this.threshold,this.location,this.startDate.toISOString().slice(0, 16),this.endDate.toISOString().slice(0, 16),).subscribe((res) => {
      this.messageService.success(`Subscription submited.`);
     
    });
  }
}
