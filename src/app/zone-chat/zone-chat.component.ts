import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppService } from '../services/app.service';
import { ElementRef } from '@angular/core';



@Component({
  selector: 'app-zone-chat',
  templateUrl: './zone-chat.component.html',
  styleUrls: ['./zone-chat.component.scss']
})
export class ZoneChatComponent implements OnInit {

  @ViewChild('chat') chatElement!: ElementRef;

  toSend!: string;

  constructor(private app: AppComponent, private appservice: AppService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  

  Send() {
    this.appservice.sendMessage(this.app.idWALaffect, this.app.idRelationSelect, this.toSend)
    this.chatElement.nativeElement.blur()
  }

}
