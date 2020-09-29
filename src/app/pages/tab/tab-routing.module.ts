import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage, 
    children: [
      {
        path: '',
        redirectTo: '/tab/account',
        pathMatch: 'full',
      },
      {
        path: 'account',
        loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../list/list-routing.module').then(m => m.ListPageRoutingModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../infiniti/infiniti.module').then(m => m.InfinitiPageModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
