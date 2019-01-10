import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NguCarouselModule } from '@ngu/carousel';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { TopContentComponent } from './top-content/top-content.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { InterestsComponent } from './interests/interests.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  // { path: 'dashboard', component:  DashboardComponent },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopMenuComponent,
    TopContentComponent,
    MyWorksComponent,
    AboutMeComponent,
    SkillsComponent,
    ResumeComponent,
    TestimonialsComponent,
    InterestsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    BrowserAnimationsModule,
    MaterialModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
