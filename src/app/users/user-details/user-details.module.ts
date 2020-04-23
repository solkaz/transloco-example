import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [UserDetailsPageComponent],
  imports: [CommonModule, UserDetailsRoutingModule, TranslocoModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'userDetails' }],
})
export class UserDetailsModule {}
