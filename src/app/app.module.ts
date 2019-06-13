import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full'},
  { path: 'photos', component: AppComponent },
  { path: ':id', component: PhotoDetailComponent },
];

@NgModule({
  imports: [ 
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
