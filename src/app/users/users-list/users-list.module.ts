import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListPageComponent } from './users-list-page/users-list-page.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [UsersListPageComponent],
  imports: [CommonModule, UsersListRoutingModule, TranslocoModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'usersList' }],
})
export class UsersListModule {}
