import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.page.html',
  styleUrls: ['./booster.page.scss'],
})
export class BoosterPage implements OnInit {

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }
  gonotrition(){
    this.navCtrl.navigateForward('/notrition');
  }
  }

 
