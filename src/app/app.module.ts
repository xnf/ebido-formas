import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TvnetComponent } from './tvnet/tvnet.component';
import { DelfiComponent } from './delfi/delfi.component';
import { ProfileReactiveComponent } from './profile-reactive/profile-reactive.component';
import { LaikapogaComponent } from './laikapoga/laikapoga.component';
import { IevadeComponent } from './ievade/ievade.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GalleryComponent,
    TvnetComponent,
    DelfiComponent,
    ProfileReactiveComponent,
    LaikapogaComponent,
    IevadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
