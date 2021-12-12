import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-procurementmanagerhome',
  templateUrl: './procurementmanagerhome.component.html',
  styleUrls: ['./procurementmanagerhome.component.css']
})
export class ProcurementmanagerhomeComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
