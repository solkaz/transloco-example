import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./users-list/users-list.module').then((m) => m.UsersListModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./user-details/user-details.module').then(
        (m) => m.UserDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
