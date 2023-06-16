import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ItemsComponent } from './views/items/items.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'items', component: ItemsComponent},
  { path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
