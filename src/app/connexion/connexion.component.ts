import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AppmainComponent } from '../appmain/appmain.component';
import { AppService } from '../services/app.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  
  identifiantSaisie: string="";
  messageConnexion:string =" "
  error:boolean = false;
  

  constructor(private app :AppComponent, private service: AppService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmitForm(): void {

    

    console.log("j'ai récupérer" + this.identifiantSaisie)

    this.messageConnexion = this.service.Connexion(this.identifiantSaisie)

    if (this.messageConnexion = "Utilisateur connu"){
      this.error = true;
      this.app.isAuthenticated = true;
      this.app.idWALaffect = this.identifiantSaisie;

      this.router.navigateByUrl('/Main');
    }
    else {
      this.error = false;
    }

    
  }

}
