import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsfactsHomeComponent } from './jsfacts-home/jsfacts-home.component';
import { JsfactsPromisesComponent } from './jsfacts-promises/jsfacts-promises.component';
import { JsfactsCallbacksComponent } from './jsfacts-callbacks/jsfacts-callbacks.component';
import { JsfactsMapComponent } from './jsfacts-map/jsfacts-map.component';
import { JsfactsJScreatorComponent } from './jsfacts-jscreator/jsfacts-jscreator.component';

const routes: Routes = [
  {path: 'home', component: JsfactsHomeComponent},
  {path: 'promises', component: JsfactsPromisesComponent},
  {path: 'callbacks', component: JsfactsCallbacksComponent},
  {path: 'map', component: JsfactsMapComponent},
  {path: 'creator', component: JsfactsJScreatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
