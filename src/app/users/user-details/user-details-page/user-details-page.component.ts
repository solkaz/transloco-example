import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
