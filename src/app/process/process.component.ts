import { Component, OnInit, TemplateRef } from "@angular/core";
import { KieService } from "../kie.service";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal";
import { ModalOptions } from "ngx-bootstrap/modal/modal-options.class";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";
import { NavigationEnd, Router, RouterEvent } from "@angular/router";
import { filter } from "rxjs";


@Component({
  selector: "app-process",
  templateUrl: "./process.component.html",
  styleUrls: ["./process.component.css"],
})
export class ProcessComponent implements OnInit {
  svg: SafeHtml;
  modalRef: BsModalRef;
  processes: any[] = new Array();
  

  constructor(
    private kieService: KieService,
    private modalService: BsModalService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  viewProcess(template: TemplateRef<any>, processInstanceId: string) {
    this.kieService.getImage(processInstanceId).subscribe((res) => {
      this.svg = this.sanitizer.bypassSecurityTrustHtml(res);

      const config: ModalOptions = { class: "modal-lg" };
      this.modalRef = this.modalService.show(template, config);
    });
  }

  load(): void {
    this.kieService.getProcesses().subscribe((res) => {
      this.processes = res["process-instance"];
    });
  }

  ngOnInit() {
    this.load();
  }

  ngAfterViewInit(){
    this.load();
  }

  // ngOnInit(): void {
  //   this.router.events.pipe(
  //     filter((event: RouterEvent) => event instanceof NavigationEnd)
  //   ).subscribe(() => {
  //     this.load();
  //   });
  // }

 
}
