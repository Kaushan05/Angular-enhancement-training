import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  {
    path: 'Register',
    component: RegisterPageComponent,
    loadChildren: () =>
      import('./register-page/register-page.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'Home',
    component: HomePageComponent,
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
