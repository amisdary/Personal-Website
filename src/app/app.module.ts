import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactAreaComponent } from './components/contact-area/contact-area.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { PdfViewerModule } from 'ng2-pdf-viewer'
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ExamplePdfViewerComponent } from './components/example-pdf-viewer/example-pdf-viewer.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactAreaComponent,
    ProjectsComponent,
    ResumeComponent,
    ExamplePdfViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
