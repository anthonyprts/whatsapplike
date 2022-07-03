import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-appmain',
  templateUrl: './appmain.component.html',
  styleUrls: ['./appmain.component.scss']
})
export class AppmainComponent implements OnInit {

  relationName!:string;

  constructor(public app: AppComponent) { }

  ngOnInit(): void {
    this.relationName = this.app.identiteRelation
  }



}
