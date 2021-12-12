import { Component, OnInit } from "@angular/core";
import { KieService } from "../kie.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "../message/message.service";

@Component({
  selector: "app-prepareoffer",
  templateUrl: "./prepareoffer.component.html",
  styleUrls: ["./prepareoffer.component.css"],
})
export class PrepareofferComponent implements OnInit {
  task: any = null;
  taskInstanceId: number;
  supplierPrice: number;
  invalidInput = false;
  errorDesc: string;
  isVisible = false;
  laptopName: string;
  isMacBook = false;
  isSurface = false;
  isHP = false;

  constructor(
    private kieService: KieService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) {
    //this.laptopName = "MacBook Pro";
    //this.laptopName = "Surface Book 3";
   // this.laptopName = "HP Spectre";
   // this.setDisplay(this.laptopName);
  }

  load(taskId: number): void {
    this.kieService.getTask(taskId).subscribe((task) => {
      this.task = task;
      this.setDisplay(this.task["laptop"]);
    });
 
  }

  supplier(): void {
    this.kieService
      .suppliercomplete(this.taskInstanceId, this.supplierPrice)
      .subscribe(() => {
        this.messageService.info("Offer sent for approval.");
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

  selected() {
    //alert(this.selectedUrgency.name)
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

  checkInput() {
    if (this.supplierPrice < 0) {
      this.isVisible = true;
      this.errorDesc = "Supplier Price can not be less than zero.";
      this.invalidInput = true;
    } else if (this.supplierPrice == null) {
      this.isVisible = true;
      this.errorDesc = "Supplier Price can not be empty";
      this.invalidInput = true;
    } else {
      this.isVisible = false;
      this.invalidInput = false;
    }
  }
}
