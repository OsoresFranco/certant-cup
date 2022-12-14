import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

import { FeaturesComponent } from './features.component';
import { HomeComponent } from './private/home/home.component';
import { JackpotComponent } from './private/jackpot/jackpot.component';
import { MyBetsComponent } from './private/my-bets/my-bets.component';
import { MyaccountComponent } from './private/myaccount/myaccount.component';
import { RankingComponent } from './private/ranking/ranking.component';
import { TopScorersComponent } from './private/top-scorers/top-scorers.component';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'certantcup/home', pathMatch: 'full' },
  {
    path: 'certantcup',
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'ranking', component: RankingComponent },
      { path: 'goleadores', component: TopScorersComponent },
      { path: 'apuestas', component: MyBetsComponent },
      { path: 'jackpot', component: JackpotComponent },
      { path: 'micuenta', component: MyaccountComponent },
    ],
    component: FeaturesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
