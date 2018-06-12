import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryListDbService } from './lists';

import { SharedMaterialModule } from './/shared-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListService } from './list.service';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
