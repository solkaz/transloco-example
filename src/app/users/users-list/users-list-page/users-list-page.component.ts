import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListPageComponent {
  readonly users = Array.from({length: 10}, () => Math.floor(Math.random() * 100).toString());
}
