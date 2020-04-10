import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercisesguidePageRoutingModule } from './exercisesguide-routing.module';

import { ExercisesguidePage } from './exercisesguide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercisesguidePageRoutingModule
  ],
  declarations: [ExercisesguidePage]
})
export class ExercisesguidePageModule {}
