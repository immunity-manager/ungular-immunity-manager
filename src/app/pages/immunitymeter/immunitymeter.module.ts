import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImmunitymeterPageRoutingModule } from './immunitymeter-routing.module';

import { ImmunitymeterPage } from './immunitymeter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImmunitymeterPageRoutingModule
  ],
  declarations: [ImmunitymeterPage]
})
export class ImmunitymeterPageModule {}
