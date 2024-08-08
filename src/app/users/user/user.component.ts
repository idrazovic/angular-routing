import { Component, computed, input } from '@angular/core';

import { type User } from './user.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();

  imagePath = computed(() => 'users/' + this.user().avatar);
}
