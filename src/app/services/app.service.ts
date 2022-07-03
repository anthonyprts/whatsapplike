import { JsonPipe, TitleCasePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Contact } from "models/contact.model";
import { Message } from "models/message.model";
import { async, Observable } from "rxjs";
import { AppComponent } from "../app.component";
import { HeaderComponent } from "../header/header.component";


// Gro probleme avec les return

@Injectable({
    providedIn: 'root'
})
export class AppService {

    profilUtilisateur!:string;

    constructor(private app: AppComponent, private router: Router){}



    Inscription(pseudo: string, mail: string): string{
        var reponse
        var message=""
        var xmlhttp = new XMLHttpRequest()
        xmlhttp.open("GET", "https://trankillprojets.fr/wal/wal.php?inscription&identite=" + pseudo + "&mail=" + mail, true);

        xmlhttp.onload = function () {
            reponse = xmlhttp.responseText;
        }

        xmlhttp.onload = function () {
            if (xmlhttp.readyState === xmlhttp.DONE) {
                if (xmlhttp.status === 200) {
                    reponse = JSON.parse(xmlhttp.responseText);
                    //console.log(xmlhttp.response.reponse);
                    //console.log(xmlhttp.responseText);
                    console.log(reponse.etat.message)
                    message = reponse.etat.message
                    
                }
            }


        }
        xmlhttp.send();


        return message
    }

    Connexion(idWAL: string):string{
        console.log("Je commence mon traitement")
        var reponseReq
        var errorMessage = "";
        var xmlhttp = new XMLHttpRequest();


        xmlhttp.open("GET", "https://trankillprojets.fr/wal/wal.php?information&identifiant=" + idWAL, true);
        
        xmlhttp.onload = function(){
            if (xmlhttp.readyState === xmlhttp.DONE) {
                if (xmlhttp.status === 200) {
                    reponseReq = JSON.parse(xmlhttp.responseText);
                    //console.log(xmlhttp.response.reponse);
                    //console.log(xmlhttp.responseText);
                    console.log(reponseReq.etat.reponse)
                    if (reponseReq.etat.reponse = 1) {
                        
                        console.log("utilisateur connu")
                        errorMessage = "Utilisateur connu";
                        //on change de page
                    }
                    else {
                        // on affiche un message utilisateur inconnue
                        errorMessage = "Utilisateur inconnu";
                        console.log("Utilisateur inconnu")


                    }
                }
            }
            
            
        }
        
        xmlhttp.send();
        
        
        
        return errorMessage;
    
    }

    

    async getParametres(idWAL: string):Promise<string> {
        console.log("j'ai récuperer " + idWAL )

            
        let response = await fetch('https://trankillprojets.fr/wal/wal.php?information&identifiant=' + idWAL);

        let text = await response.json() // read response body as text
    
        let User = text.identite

        //console.log("Au final j'ai " + User)

    
        return User;
    }

    Deconnexion(){
        this.app.isAuthenticated = false;
        this.app.idWALaffect = "";
    }

    

    async getRelation(idWAL: string) {
        
        

        
        let response = await fetch('https://trankillprojets.fr/wal/wal.php?relations&identifiant=' + idWAL);

        let text = await response.json() // read response body as text


        let relationsL: Contact[] = text.relations

        

        console.log(relationsL)
        



        return relationsL




    }

    addRelation(idWAL: string, mail:string){
        var xmlhttp = new XMLHttpRequest()
        xmlhttp.open("POST", "https://trankillprojets.fr/wal/wal.php?lier&identifiant=" + idWAL + "&mail=" + mail, true);
        

        xmlhttp.onload = function () {
            if (xmlhttp.readyState === xmlhttp.DONE) {
                if (xmlhttp.status === 200) {
                    var reponseReq = JSON.parse(xmlhttp.responseText);
                    console.log(reponseReq.etat.reponse)
                    
                    if (reponseReq.etat.reponse == "1") {

                        window.alert("Utilisateur ajouté veuillez rafraîchir");
                    }
                    else if (reponseReq.etat.reponse == "0"){
                        // on affiche un message utilisateur inconnue
                        console.log("utilisateur inconnu");
                        window.alert("Utilisateur inconnu");
                    }
                }
            }


        }

        xmlhttp.send();
        
        
    }

    deleteRelation(idWAL: string, mail: string){
        var xmlhttp = new XMLHttpRequest()
        xmlhttp.open("GET", "https://trankillprojets.fr/wal/wal.php?delier&identifiant=" + idWAL + "&mail=" + mail, true);
        
        xmlhttp.onload = function () {
            if (xmlhttp.readyState === xmlhttp.DONE) {
                if (xmlhttp.status === 200) {
                    var reponseReq = JSON.parse(xmlhttp.responseText);

                    if (reponseReq.etat.reponse == "1") {

                        window.alert("Utilisateur supprimé veuillez rafraîchir");
                    }
                    else if (reponseReq.etat.reponse == "0"){
                        // on affiche un message utilisateur inconnue
                        console.log("utilisateur inconnu");
                        window.alert("Utilisateur inconnu");
                    }
                }
            }


        }
        
        xmlhttp.send();
        
        
    }

    async getMessage(idWAL: string,idRelation:number){
        

        let response = await fetch('https://trankillprojets.fr/wal/wal.php?lire&identifiant=' +idWAL + '&relation=' + idRelation);

        let text = await response.json()
         // read response body as text


        let messages: Message[] = text.messages


        
        
        return messages
    }

    sendMessage(idWAL: string, idRelation: number, message:string){
        var xmlhttp = new XMLHttpRequest()
        xmlhttp.open("POST", "https://trankillprojets.fr/wal/wal.php?ecrire&identifiant=" + idWAL + "&relation=" + idRelation + "&message=" + message, true);
        
        xmlhttp.onload = function () {
            if (xmlhttp.readyState === xmlhttp.DONE) {
                if (xmlhttp.status === 200) {
                    var reponseReq = JSON.parse(xmlhttp.responseText);

                    if (reponseReq.reponse != 0) {

                        console.log("Message envoyé");
                    }
                    else {
                        // on affiche un message utilisateur inconnue
                        console.log("échoué");
                        window.alert("Erreur lors de l'envoie du message")
                    }
                }
            }


        }
        
        xmlhttp.send();
        
    }


}