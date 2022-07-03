import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whatsapplike';
  isAuthenticated = false;
  idWALaffect = ""
  idRelationSelect!:number;
  identiteRelation!: string;
}
