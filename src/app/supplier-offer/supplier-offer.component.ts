import { Component, OnInit } from '@angular/core';
import { KieService } from '../kie.service';
import { MessageService } from '../message/message.service';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-supplier-offer',
  templateUrl: './supplier-offer.component.html'
})
export class SupplierOfferComponent implements OnInit {
  tasks: any[] = new Array();
  
  
  constructor(private kieService: KieService, private messageService: MessageService, private router: Router) { }

  claimAndStart(taskId: number , taskName: string): void {
    this.kieService.claim(taskId).pipe(
      mergeMap(() => this.kieService.start(taskId))
    ).subscribe(() => {
      this.messageService.info(`Task ${taskId} started`);
      this.go(taskId, taskName);
    });
  }

  startTask(taskId: number, taskName: string): void {
    this.kieService.start(taskId).subscribe(() => {
      this.messageService.info(`Task ${taskId} started`);
      this.go(taskId, taskName);

    });
  }

  go(taskId: number, taskName: string): void {
    if (taskName == "Request Offer")
      this.router.navigate(['/home/approve'], { queryParams: { id: taskId } });
    else if (taskName == "Prepare Offer")
      this.router.navigate(['/home/supplier'], { queryParams: { id: taskId } });
    else
      this.router.navigate(['/home/management'], { queryParams: { id: taskId } });
  }

  load(): void {
    this.kieService.getTasks().subscribe(res => {
      this.tasks = res['task-summary'];
    });
  }

  ngOnInit() {
    this.load();
  }

}

