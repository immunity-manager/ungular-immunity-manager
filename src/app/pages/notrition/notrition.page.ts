import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-notrition',
  templateUrl: './notrition.page.html',
  styleUrls: ['./notrition.page.scss'],
})
export class NotritionPage implements OnInit {
  private typearray = ["vitamins", "minerals","calories"];
  private Datasub: any[] = [];
  private categname: any = "";
  private subcategname: any = "";
  private categoryArray: any[] = [
    {
      "name": "vitamins",
      "sub": ["A", "B", "C"]
    }
    ,
    {
      "name": "minerals",
      "sub": ["D", "H", "E"]  
    },
    {
      "name": "calories",
      "sub": ["S", "R", "Y"]  
    }
  ];
  constructor(
    private afdatabase: AngularFireDatabase,
    private navController: NavController,
    private alertController: AlertController,
    private loadingController:LoadingController,
  ) {
    
   }
  ngOnInit() {
    this.filterdata(this.categoryArray[0].name)
    this.filterdatasub(this.categoryArray[0].sub[0])
  }
  filterdata(catname) {
    this.subcategname = "";
    this.categname = catname;
    for (let index = 0; index < this.categoryArray.length; index++) {
      if (this.categoryArray[index].name == catname) {
        this.Datasub = this.categoryArray[index].sub;
      }
    }
  }
  filterdatasub(sub) {
    this.subcategname = sub; 
}
}
