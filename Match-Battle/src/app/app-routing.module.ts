import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardListComponent } from './cards/components/card-list/card-list.component';
import { CreateGameComponent } from './games/components/create-game/create-game.component';
import { PlayerListComponent } from './players/components/player-list/player-list.component';

const routes: Routes = [
  { path: 'cards', component: CardListComponent },
  { path: 'games', component: CreateGameComponent },
  { path: 'players', component: PlayerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
