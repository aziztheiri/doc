import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { GuideComponent } from './guide/guide.component';
import { ApiUsageComponent } from './guide/api-usage/api-usage.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GuideComponent,
    ApiUsageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
