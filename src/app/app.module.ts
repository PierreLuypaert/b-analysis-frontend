import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalysisHistoryComponent } from './components/analysis-history/analysis-history.component';
import { AnalysisCardComponent } from './components/analysis-history/analysis-card/analysis-card.component';
import { HeaderComponent } from './components/global/header/header.component';
import { FooterComponent } from './components/global/footer/footer.component';
import { AnalysisDetailsComponent } from './components/analysis-details/analysis-details.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerCardComponent } from './components/player-list/player-card/player-card.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchChartComponent } from './components/analysis-details/match-chart/match-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisHistoryComponent,
    AnalysisCardComponent,
    HeaderComponent,
    FooterComponent,
    AnalysisDetailsComponent,
    PlayerListComponent,
    PlayerCardComponent,
    PlayerDetailsComponent,
    UploadVideoComponent,
    MatchChartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
