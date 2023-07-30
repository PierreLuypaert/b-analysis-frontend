import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisHistoryComponent } from './components/analysis-history/analysis-history.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';

const routes: Routes = [
  { path: 'history', component: AnalysisHistoryComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'upload', component: UploadVideoComponent },
  { path: '', redirectTo: '/history', pathMatch: 'full' }, // Redirect to 'history' by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
