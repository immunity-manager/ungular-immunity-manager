import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesguidePage } from './exercisesguide.page';

const routes: Routes = [
  {
    path: '',
    component: ExercisesguidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisesguidePageRoutingModule {}
