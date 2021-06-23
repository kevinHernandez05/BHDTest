import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'dash',
        loadChildren: () =>
          import('../dash/dash.module').then((m) => m.DashPageModule),
      },
      {
        path: 'transaction',
        loadChildren: () =>
          import('../transactions/transactions.module')
          .then((m) => m.TransactionsPageModule),
      },
      {
        path: 'config',
        loadChildren: () =>
          import('../config/config.module').then((m) => m.ConfigPageModule),
      },
      {
        path: '',
        redirectTo: 'home/dash',
        pathMatch: 'full',
      },
      {
        path: 'home',
        redirectTo: 'home/dash',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
