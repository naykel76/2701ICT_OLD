import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule) },
//   { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
//   {
//     path: 'forms',
//     loadChildren: () => import('./forms/forms.module').then( m => m.FormsPageModule)
//   },
//   {
//     path: 'reports',
//     loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
//   },
//   {
//     path: 'forms',
//     loadChildren: () => import('./pages/forms/forms.module').then( m => m.FormsPageModule)
//   },
//   {
//     path: 'reports',
//     loadChildren: () => import('./pages/reports/reports.module').then( m => m.ReportsPageModule)
//   },
//   {
//     path: 'home',
//     loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
//   },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
