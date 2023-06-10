import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';

import { GameListComponent } from './components/game-list/game-list.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { CreateGameComponent } from './components/create-game/create-game.component';


@NgModule({
  declarations: [
    GameListComponent,
    ScoreboardComponent,
    CreateGameComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
