import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SedeComponent } from './sede/sede.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { PackComponent } from './pack/pack.component';

@NgModule({
  declarations: [
    AppComponent,
    SedeComponent,
    TrabajadorComponent,
    PackComponent,
    TrabajadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
