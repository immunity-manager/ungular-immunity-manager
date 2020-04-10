import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotritionPageRoutingModule } from './notrition-routing.module';

import { NotritionPage } from './notrition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotritionPageRoutingModule
  ],
  declarations: [NotritionPage]
})
export class NotritionPageModule {}
