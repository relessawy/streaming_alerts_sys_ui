import { Component, OnInit } from "@angular/core";
import { KieService } from "../kie.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "../message/message.service";

@Component({
  selector: "app-requestoffer",
  templateUrl: "./requestoffer.component.html",
  styleUrls: ["./requestoffer.component.css"],
})
export class RequestofferComponent implements OnInit {
  task: any = null;
  taskInstanceId: number;
  targetPrice: number;
  selectedUrgency: string;
  laptopName: string;
  isMacBook = false;
  isSurface = false;
  isHP = false;
  isVisible = false;
  urgencyDescription: string;
  invalidInput = false;
  errorDesc: string;

  constructor(
    private kieService: KieService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) {
    this.selectedUrgency = "high";
    this.targetPrice = 0;
    this.urgencyDescription =
      "High urgency means that the price tolerance is 125%, the process can automatically accept offers that are 25% higher than the target price.";
  }

  load(taskId: number): void {
    this.kieService.getTask(taskId).subscribe((task) => {
      this.task = task;
      this.setDisplay(this.task["laptop"]);
    });
  }

  submit(): void {
    this.kieService
      .complete(this.taskInstanceId, this.targetPrice, this.selectedUrgency)
      .subscribe(() => {
        this.messageService.info("Request for offer sent.");
        this.router.navigate(["/home/process"]);
      });
  }

  setDisplay(laptop: string) {
    if (laptop == "MacBook Pro") {
      this.isMacBook = true;
      this.isSurface = false;
      this.isHP = false;
    } else if (laptop == "Surface Book 3") {
      this.isMacBook = false;
      this.isSurface = true;
      this.isHP = false;
    } else if (laptop == "HP Spectre") {
      this.isMacBook = false;
      this.isSurface = false;
      this.isHP = true;
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe((routeParams) => {
      if (routeParams.id) {
        this.taskInstanceId = routeParams.id;
        this.load(this.taskInstanceId);
      }
    });
  }

  selectedHigh() {
    this.selectedUrgency = "high";
    this.urgencyDescription =
      "High urgency means that the price tolerance is 125%, the process can automatically accept offers that are 25% higher than the target price.";
  }
  selectedLow() {
    this.selectedUrgency = "low";
    this.urgencyDescription =
      "Low urgency means that the price tolerance is 115%, the process can automatically accept offers that are 15% higher than the target price.";
  }

  checkInput() {
    if (this.targetPrice < 0) {
      this.isVisible = true;
      this.errorDesc = "Target Price can not be less than zero.";
      this.invalidInput = true;
    } else if (this.targetPrice == null) {
      this.isVisible = true;
      this.errorDesc = "Target Price can not be empty";
      this.invalidInput = true;
    } else {
      this.isVisible = false;
      this.invalidInput = false;
    }
  }
}
