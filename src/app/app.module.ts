import { NgModule } from '@angular/core';
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
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
