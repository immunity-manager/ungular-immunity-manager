import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [

      {
        path: 'dashboard',
        loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'activity',
        loadChildren: () => import('../../pages/activity/activity.module').then(m => m.ActivityPageModule)
      },
      {
        path: 'immunitymeter',
        loadChildren: () => import('../../pages/immunitymeter/immunitymeter.module').then(m => m.ImmunitymeterPageModule)
      },
      {
        path: 'booster',
        loadChildren: () => import('../../pages/booster/booster.module').then(m => m.BoosterPageModule)
      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
