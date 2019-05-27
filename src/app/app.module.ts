import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { NguCarouselModule } from "@ngu/carousel";
import { MatDialogModule, MatButtonModule } from "@angular/material";
import { NgxGalleryModule } from "ngx-gallery";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { TopContentComponent } from "./top-content/top-content.component";
import { MyWorksComponent } from "./my-works/my-works.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ResumeComponent } from "./resume/resume.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { InterestsComponent } from "./interests/interests.component";
import { FooterComponent } from "./footer/footer.component";
import { ConnectComponent } from "./connect/connect.component";
import { HexagonComponent } from "./common-lib/svg/hexagon/hexagon.component";
import { WorkKpiComponent } from "./common-lib/work-kpi/work-kpi.component";
import { ModalComponent } from "./common-lib/modal/modal.component";
import { WorkDescComponent } from "./WorkDetails/work-desc/work-desc.component";
import { WorkSnapshotComponent } from "./WorkDetails/work-snapshot/work-snapshot.component";

const appRoutes: Routes = [];

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
    FooterComponent,
    ConnectComponent,
    HexagonComponent,
    WorkKpiComponent,
    ModalComponent,
    WorkDescComponent,
    WorkSnapshotComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "personal-website1" }),
    RouterModule.forRoot(appRoutes, { useHash: false }),
    BrowserAnimationsModule,
    MaterialModule,
    NguCarouselModule,
    MatDialogModule,
    MatButtonModule,
    NgxGalleryModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
