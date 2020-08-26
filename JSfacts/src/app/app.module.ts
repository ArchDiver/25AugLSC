import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsfactsHomeComponent } from './jsfacts-home/jsfacts-home.component';
import { JsfactsPromisesComponent } from './jsfacts-promises/jsfacts-promises.component';
import { JsfactsCallbacksComponent } from './jsfacts-callbacks/jsfacts-callbacks.component';
import { JsfactsMapComponent } from './jsfacts-map/jsfacts-map.component';
import { JsfactsJScreatorComponent } from './jsfacts-jscreator/jsfacts-jscreator.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JsfactsHomeComponent,
    JsfactsPromisesComponent,
    JsfactsCallbacksComponent,
    JsfactsMapComponent,
    JsfactsJScreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
