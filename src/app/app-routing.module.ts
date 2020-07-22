import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TvnetComponent } from './tvnet/tvnet.component';
import { DelfiComponent } from './delfi/delfi.component';
import { ProfileReactiveComponent } from './profile-reactive/profile-reactive.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'tvnet', component: TvnetComponent },
  { path: 'delfi', component: DelfiComponent, },
  { path: 'profile-reactive', component: ProfileReactiveComponent, },
  { path: '', pathMatch: 'full', redirectTo: 'profile' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
