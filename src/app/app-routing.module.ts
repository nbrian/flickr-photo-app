import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PhotoAppComponent } from './photo-app/photo-app.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { SharedModule } from './shared';

export const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full'},
  // { path: 'photo', 
    // loadChildren: './photo-app/photo-app.module#PhotoAppModule'
  //   loadChildren: () => import('./photo-app/photo-app.module').then(mod => mod.PhotoAppModule) 
  // },
  { path: 'photos', component: PhotoAppComponent },
  { path: 'photos/:id', component: PhotoDetailComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  declarations: [PhotoAppComponent, PhotoDetailComponent],
  exports: [SharedModule, RouterModule],
  entryComponents: [PhotoDetailComponent]
})
export class AppRoutingModule { }