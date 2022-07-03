import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { SingleContactComponent } from './single-contact/single-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { ConversationComponent } from './conversation/conversation.component';
import { InvitationComponent } from './invitation/invitation.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppmainComponent } from './appmain/appmain.component';
import { HeaderComponent } from './header/header.component';
import { AppService } from './services/app.service';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { FooterComponent } from './footer/footer.component';
import { ZoneChatComponent } from './zone-chat/zone-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    ContactComponent,
    SingleContactComponent,
    ContactListComponent,
    ConversationListComponent,
    ConversationComponent,
    InvitationComponent,
    MessageListComponent,
    MessageComponent,
    AppmainComponent,
    HeaderComponent,
    HeaderHomeComponent,
    FooterComponent,
    ZoneChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [AppComponent,AppService,HeaderComponent,MessageListComponent,ContactListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
