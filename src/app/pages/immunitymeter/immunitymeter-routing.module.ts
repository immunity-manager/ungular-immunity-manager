import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImmunitymeterPage } from './immunitymeter.page';

const routes: Routes = [
  {
    path: '',
    component: ImmunitymeterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImmunitymeterPageRoutingModule {}
