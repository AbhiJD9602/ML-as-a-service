import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import {ROUTES} from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
