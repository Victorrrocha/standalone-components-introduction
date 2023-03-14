import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './welcome/details/details.component';
import { HighlightDirective } from './shared/highlight.directive';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodayComponent } from './dashboard/today/today.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DetailsComponent,
    HighlightDirective,
    AboutComponent,
    DashboardComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
