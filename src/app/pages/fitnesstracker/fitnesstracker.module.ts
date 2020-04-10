import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitnesstrackerPageRoutingModule } from './fitnesstracker-routing.module';

import { FitnesstrackerPage } from './fitnesstracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitnesstrackerPageRoutingModule
  ],
  declarations: [FitnesstrackerPage]
})
export class FitnesstrackerPageModule {}
