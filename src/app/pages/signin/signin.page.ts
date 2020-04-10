import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  private data: any = {
    "email": 'abc@gmail.com',
    "password": "123"
  };
  constructor(
    private AngularFireAuth:AngularFireAuth,
    private AFDatabase:AngularFireDatabase,
    private toastController: ToastController,
    private alertController: AlertController,
    private afAuth: AngularFireAuth,
    private loadingController: LoadingController,
    private navCtrl: NavController,
  ) { }
 
  ngOnInit() {
  }
  async sendPasswordResetLink(email) {
    const loading = await this.loadingController.create({
      message: 'please wait...',
      spinner: 'bubbles'
    });
    await loading.present();
    this.afAuth.auth.sendPasswordResetEmail(email)
      .then((successParam) => {
        loading.dismiss();
        this.presentToast("Email link sent successfully");
      }).catch((errorParam) => {
        loading.dismiss();
        this.presentToast(errorParam.message);
      })

  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async loginUser() {
    if (this.data.email == '') {
      this.presentToast('Please enter email');
    } else if (this.data.password == '') {
      this.presentToast('Please enter password');
    } else {
    
      if (this.data.email == 'abc@gmail.com' && this.data.password == '123'){
        this.navCtrl.navigateForward('tabs/dashboard');  
        // loginfirebase()
      }
      
  }
}
  async loginfirebase(){
    const loading = await this.loadingController.create({
      message: 'please wait...',
      spinner: 'bubbles'
    });
    await loading.present();
    this.afAuth.auth.
    signInWithEmailAndPassword
    (this.data.email, this.data.password)
    .then((successparam) => {
      this.AFDatabase.object("users/" + successparam.user.uid).valueChanges().subscribe((userobj: any) => {
        loading.dismiss();
        if (userobj.active == true) {
              this.presentToast("login successfully");
              this.navCtrl.navigateForward('tabs');              
        } else {
          this.presentToast("Your account not active")
          this.navCtrl.navigateForward('home');
        }
      }, (err) => {
        loading.dismiss();
        this.presentToast("Error getting data from database")
      })
    }).catch((errorparam) => {
      loading.dismiss();
      this.presentToast(errorparam.message);
    });
}
}
