import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from 'models/message.model';
import { interval, Observable, Subject, takeUntil, tap } from 'rxjs';
import { AppComponent } from '../app.component';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  messages:Message[] = [];
  messagesSave!:Message[];
  listVide!: boolean;
  
  private destroy$!: Subject<boolean>;

  constructor(private app: AppComponent,private appservice: AppService) { }

  ngOnInit(): void {

    //this.appservice.getMessage(this.app.idWALaffect, this.app.idRelationSelect).then(Response => this.messages = Response);
    this.destroy$ = new Subject<boolean>();
    
    
    //this.appservice.getMessage(this.app.idWALaffect, this.app.idRelationSelect).then(Response => console.log(Response) );
    //Rafraichissement de la liste des message
    
    
    
  }

  ngAfterViewInit(){
    setInterval(() => {

      
      this.appservice.getMessage(this.app.idWALaffect, this.app.idRelationSelect).then(async Response => {
        this.messagesSave= Response;
        /*for(let i=0;i<this.messagesSave.length;i++){
          for (let j = 0; j < this.messagesSave.length; j++){

          }

        }*/
        for (let messageSave of this.messagesSave){

          let obj: Message = { identite: await messageSave.identite, message: await messageSave.message }
          

          console.log(obj)
          
          this.messages.push({ identite: await messageSave.identite, message: await messageSave.message }) 
          
        }

      
      })
      console.log("je rafraichi")
    }, 5000);
  }

  getList(){
    console.log("je rafraichi")
    console.log(this.app.idRelationSelect)
    this.appservice.getMessage(this.app.idWALaffect, this.app.idRelationSelect).then(Response => this.messages = Response)
    //this.appservice.getMessage(this.app.idWALaffect, this.app.idRelationSelect).then(Response => console.log(Response));
    //this.ngOnInit()
  }

  

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
