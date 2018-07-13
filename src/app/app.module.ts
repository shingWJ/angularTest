import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { SelectedHerosComponent } from './selected-heros/selected-heros.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { SimilarVodComponent } from './similar-vod/similar-vod.component';

import { SelectServiceService } from './select-service.service';
import { VodDetailService } from './vod-detail.service';

import { DisabledStyleDirective } from './disabled-style.directive';
import { MenuHighLightDirective } from './menu-high-light.directive';
import { VodPlayDirective } from './vod-play.directive';
import { GuessComponent } from './guess/guess.component';

import { StringSpliceArrayPipe } from './string-splice-array.pipe';
import { TimeMinutesPipe } from './time-minutes.pipe';
import { ALinkFocusDirective } from './a-link-focus.directive';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { AppIndexComponent } from './app-index/app-index.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { FontImageFocusDirective } from './font-image-focus.directive';
import { BeltComponent } from './belt/belt.component';
import { FramePageComponent } from './frame-page/frame-page.component';


const appRoutes: Routes = [
  {path: 'bpSimulation', component: SelectedHerosComponent},
  {path: 'all', component: HerosComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'vodDetail/:code', component: FilmDetailComponent},
  {path: '', redirectTo:'/bpSimulation',pathMatch:'full'},
  {path: 'index', component: AppIndexComponent},
  {path: 'subject', component: SubjectDetailComponent},
  {path: 'frame', component: FramePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    SelectedHerosComponent,
    DisabledStyleDirective,
    MenuComponent,
    ProfileComponent,
    MenuHighLightDirective,
    FilmDetailComponent,
    SimilarVodComponent,
    VodPlayDirective,
    GuessComponent,
    StringSpliceArrayPipe,
    TimeMinutesPipe,
    ALinkFocusDirective,
    TvSeriesComponent,
    AppIndexComponent,
    SubjectDetailComponent,
    FontImageFocusDirective,
    BeltComponent,
    FramePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [SelectServiceService,VodDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
