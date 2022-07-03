import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  info!:string;
  pseudo!:string;
  email!:string;

  constructor(private router: Router, private appservice:AppService) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigateByUrl('/')
  }

  onSubmit(): void{
    this.info= this.appservice.Inscription(this.pseudo,this.email);
    window.alert(this.info)

    this.router.navigateByUrl('/')
  }

}
