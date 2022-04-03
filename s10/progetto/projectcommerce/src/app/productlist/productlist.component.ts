import { Component, OnInit } from '@angular/core'

import { Prodotto } from '../model/model'//modulo interface
import { HttpClient } from '@angular/common/http';//modulo chiamate http
import * as Servizi from '../service/service.service';



@Component({
  selector: 'app-productlist',//nome componente
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  prodottiNegozio:Prodotto[]=[];
staCaricando=false;




  constructor(private http:HttpClient) { }
  ngOnInit(): void {
this.staCaricando=true;
setInterval(()=>{
  if(this.prodottiNegozio !=[] ){
    this.staCaricando=false;
  }
  this.prodottiNegozio=Servizi.prodotti;


},4000)



  }






  }




