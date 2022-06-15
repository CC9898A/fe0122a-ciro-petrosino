import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductlistComponent} from './productlist/productlist.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Route[] = [
  {
    path: '',
    component: ProductlistComponent,
  },


];
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
