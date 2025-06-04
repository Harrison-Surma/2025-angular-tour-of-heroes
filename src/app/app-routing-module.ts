import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heroes } from '@component/heroes/heroes';
import { HeroDetail } from '@component/hero-detail/hero-detail';
import { Dashboard } from '@component/dashboard/dashboard';

const routes: Routes = [
  { path: 'heroes', component: Heroes },
  { path: 'detail/:id', component: HeroDetail },
  { path: 'dashboard', component: Dashboard },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }