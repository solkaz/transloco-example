import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListPageComponent } from './users-list-page/users-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersListRoutingModule {}
