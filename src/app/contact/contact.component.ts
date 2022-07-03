import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'models/contact.model';
import { AppComponent } from '../app.component';
import { MessageListComponent } from '../message-list/message-list.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact!: Contact;

  constructor(private app: AppComponent, private messagelist: MessageListComponent) { }

  ngOnInit(): void {
  }

  setRelation():void{
    this.app.idRelationSelect = this.contact.relation
    this.app.identiteRelation = this.contact.identite
    
    this.messagelist.ngOnInit
  }

}
