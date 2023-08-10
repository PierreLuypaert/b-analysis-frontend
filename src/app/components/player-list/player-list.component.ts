import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: any[] = [];
   
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.fetchPlayers();
  }

  fetchPlayers() {
    this.playerService.getPlayers().subscribe(
      response => {
        this.players = response;
      },
      error => {
        console.error('Error fetching players', error);
      }
    );
  }
}
