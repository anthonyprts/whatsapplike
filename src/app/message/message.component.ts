import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'models/message.model';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  user:boolean = false;
  notuser:boolean = false;

  @Input() message!: Message;

  constructor(private header: HeaderComponent) { }

  ngOnInit(): void {


    if(this.header.profil = this.message.identite){
      this.user = true;
      this.notuser = false;
    }
    else{
      this.notuser = true;
      this.user = false;
    }


  }


}
