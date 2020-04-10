import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitnesstrackerPage } from './fitnesstracker.page';

const routes: Routes = [
  {
    path: '',
    component: FitnesstrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitnesstrackerPageRoutingModule {}
