import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PlayerScoreboardPick } from '../sub-system/models/api/player-scoreboard-pick';
import { LeagueService } from '../sub-system/services/league.service';
import { LoggerService } from '../sub-system/services//logger.service';
import { StatusService } from '../sub-system/services/status.service';



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  //Picks: Pick[] = [];
  Picks: PlayerScoreboardPick[] = [];


  constructor(private leagueService: LeagueService, private logger: LoggerService, private statusService: StatusService) { }

  ngOnInit() {
    this.getPlayerPicks();
  }

  getPlayerPicks()
  {
    this.leagueService.readPlayerScoreboard(this.statusService.seasonCode, this.statusService.leagueCode, this.statusService.weekNumberFilter, this.statusService.playerTagFilter)
      .subscribe(
        response => { 
          this.Picks = response 
        },
        errors => { return throwError(this.logger.logAndParseHttpError(errors)); }
      );
  }

}
