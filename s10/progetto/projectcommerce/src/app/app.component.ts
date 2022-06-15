import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Servizi from '../app/service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectcommerce';
  constructor(public http:HttpClient){}
ngOnInit(): void {
  Servizi.caricamento(this.http)
}


}
