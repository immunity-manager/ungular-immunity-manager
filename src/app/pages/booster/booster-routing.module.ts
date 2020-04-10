import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoosterPage } from './booster.page';

const routes: Routes = [
  {
    path: '',
    component: BoosterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoosterPageRoutingModule {}
