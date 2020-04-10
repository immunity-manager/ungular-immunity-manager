import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private sliderOptions: any = {
    autoplay: true,
    slidesPerView: 1
  }
  private ads: any[] = [
    {
      "img": "assets/Immunity_Manager_LOGO.jpg",
      "title": "diet",
      "subtitle": "Immunity_Manager"
    },
    {
      "img": "assets/gallery.jpg",
      "title": "gallery",
      "subtitle": "Immunity_Manager"
    }

  ]
  private userObjStorage = {};
  private userloginpass = true;
  constructor(
    private navctl: NavController,
    private alertController: AlertController,
    private toastController: ToastController,
  ) {

  }
  signin() {
    this.navctl.navigateForward('/signin');
  }
  signup() {
    this.navctl.navigateForward('/signup');
  }
  

}
