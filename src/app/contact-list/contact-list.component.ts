import { Component, OnInit } from '@angular/core';
import { Contact } from 'models/contact.model';
import { interval, Observable, Subject, takeUntil, tap, timeout } from 'rxjs';
import { AppComponent } from '../app.component';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts!: Contact[];
  private destroy$!: Subject<boolean>;
  
  

  constructor(private app: AppComponent, private appservice: AppService) { }

  ngOnInit(): void {
    //this.appservice.getRelation(this.app.idWALaffect).then(res => console.log(res))
    this.destroy$ = new Subject<boolean>();
    this.appservice.getRelation(this.app.idWALaffect).then(Response => this.contacts = Response)
  
    //Rafraichissement de la liste des message
    /*while (this.app.isAuthenticated){
      setTimeout(() => {
        this.appservice.getRelation(this.app.idWALaffect).then(Response => this.contacts = Response)
      },1000);
    }*/
  }

  getRelationList() {
    this.appservice.getRelation(this.app.idWALaffect).then(res => this.contacts = res)
    
  }

}




function subscribe() {
  throw new Error('Function not implemented.');
}

