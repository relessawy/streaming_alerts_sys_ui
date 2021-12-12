import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supplierhome',
  templateUrl: './supplierhome.component.html',
  styleUrls: ['./supplierhome.component.css']
})
export class SupplierhomeComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
