import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SectionTitleComponent } from './shared/components/section-title/section-title.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { TalkToMeComponent } from './components/talk-to-me/talk-to-me.component';
import { SocialMediaIconsComponent } from './shared/components/social-media-icons/social-media-icons.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    AboutMeComponent,
    SectionTitleComponent,
    MyProjectsComponent,
    CertificatesComponent,
    TalkToMeComponent,
    SocialMediaIconsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
