import { Component, OnInit } from '@angular/core';
import { KieService } from '../kie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html'
})
export class SupplierComponent implements OnInit {
  task: any = null;
  taskInstanceId: number;
  supplierPrice: number;

  constructor(private kieService: KieService, private route: ActivatedRoute, private messageService: MessageService, private router: Router) { }

  load(taskId: number): void {
    this.kieService.getTask(taskId).subscribe(task => {
      this.task = task;
    });
  }

  supplier(): void {
    this.kieService.suppliercomplete(this.taskInstanceId, this.supplierPrice).subscribe(() => {
      this.messageService.info('Task has been Approved');
      this.router.navigate(['/home/task']);
    });
  }


  ngOnInit() {
    this.route.queryParams.subscribe(routeParams => {
      if (routeParams.id) {
        this.taskInstanceId = routeParams.id;
        this.load(this.taskInstanceId);
      }
    });
  }

  selected(){
    //alert(this.selectedUrgency.name)
  }

}
