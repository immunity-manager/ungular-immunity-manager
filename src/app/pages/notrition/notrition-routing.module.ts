import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotritionPage } from './notrition.page';

const routes: Routes = [
  {
    path: '',
    component: NotritionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotritionPageRoutingModule {}
