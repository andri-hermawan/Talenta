import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

const appRoutes: Routes=[
  {
    path:'',
    component:DashboardComponent
  }
  // ,
  // {
  //   path:'about',
  //   component:AboutComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
