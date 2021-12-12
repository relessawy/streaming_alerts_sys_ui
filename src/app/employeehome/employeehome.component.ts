import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
