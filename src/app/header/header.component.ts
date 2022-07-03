import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { AppComponent } from '../app.component';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { MessageListComponent } from '../message-list/message-list.component';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email!: string;
  profil!: string;
  
  

  constructor(private app: AppComponent, private service:AppService, private router: Router,private messlist:MessageListComponent, private  contact:ContactListComponent) { }

  ngOnInit(): void {

    this.getProfil()
  }

  onDeconnect():void{
    
    this.app.isAuthenticated = false;
    this.app.idWALaffect= ""
    this.app.idRelationSelect= 0;
    this.router.navigateByUrl('/');
    this.messlist.ngOnDestroy()
    
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  displayStyle2 = "none";

  openPopup2() {
    this.displayStyle2 = "block";
  }
  closePopup2() {
    this.displayStyle2 = "none";
  }

  displayStyle3 = "none";

  openPopup3() {
    this.displayStyle3 = "block";
  }
  closePopup3() {
    this.displayStyle3 = "none";
  }

  add(){
    this.service.addRelation(this.app.idWALaffect,this.email)
    this.closePopup()
    this.contact.ngOnInit()

    
  }

  deleteRe() {
    this.service.deleteRelation(this.app.idWALaffect,this.email)
    this.closePopup2()
    this.contact.ngOnInit()
  }

  getProfil(){

    this.service.getParametres(this.app.idWALaffect).then(res => this.profil= res );

  
  }

}
