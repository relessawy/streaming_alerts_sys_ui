import { Component, OnInit } from "@angular/core";
import { KieService } from "../kie.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "../message/message.service";

@Component({
  selector: "app-management",
  templateUrl: "./management.component.html",
  styleUrls: ["./management.component.css"],
})
export class ManagementComponent implements OnInit {
  task: any = null;
  taskInstanceId: number;
  isApproved: boolean;
  message: string;

  constructor(
    private kieService: KieService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) {}

  load(taskId: number): void {
    this.kieService.getTask(taskId).subscribe((task) => {
      this.task = task;
    });
  }

  management(): void {
    this.kieService
      .managementcomplete(this.taskInstanceId, this.isApproved)
      .subscribe(() => {
        this.messageService.info(
          this.message
        );
        this.router.navigate(["/home/process"]);
      });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((routeParams) => {
      if (routeParams.id) {
        this.taskInstanceId = routeParams.id;
        this.load(this.taskInstanceId);
      }
    });
  }

  selectedYes() {
    this.isApproved = true;
    this.message="Order Approved.";
  }
  selectedNo() {
    this.isApproved = false;
    this.message="Order Rejected";
  }
}
