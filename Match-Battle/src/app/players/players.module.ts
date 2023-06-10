import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';

import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';


@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerDetailComponent,
    CreatePlayerComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }
