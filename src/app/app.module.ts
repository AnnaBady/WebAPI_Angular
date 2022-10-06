import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentUIComponent } from './document-ui/document-ui.component';
import { ShowDeleteComponent } from './documentUI/show-delete/show-delete.component';
import { AddEditComponent } from './documentUI/add-edit/add-edit.component';
import { SharedService } from './shared.service';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DocumentUIComponent,
    ShowDeleteComponent,
    AddEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
