import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentUIComponent } from './document-ui/document-ui.component'

const routes: Routes = [

  {path:'documentUI',component:DocumentUIComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
