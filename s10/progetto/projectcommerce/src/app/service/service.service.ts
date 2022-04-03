
import {Prodotto} from '../model/model'//modulo interface
import { HttpClient } from '@angular/common/http';//modulo chiamate http
export let prodotti: Prodotto []=[];


export function caricamento(http:HttpClient):void{//funzione dati json
http.get("http://localhost:4201/prodotti").subscribe((resp)=>{
  prodotti= <Prodotto []>resp;
})




}






