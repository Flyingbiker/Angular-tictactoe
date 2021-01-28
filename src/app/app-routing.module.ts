import { ParamPageComponent } from './param-page/param-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '/', component GamePageComponent,
    path: '/params', component ParamPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
