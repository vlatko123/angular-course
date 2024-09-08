import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // selectedUser = DUMMY_USERS[randomIndex] before signals
  selectedUser = signal(DUMMY_USERS[randomIndex]); // with signals
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar) // with signals we use computed()

  // get imagePath () {
  //   return 'assets/users/' + this.selectedUser.avatar  //without signals, we can use getter
  // }

  onSelectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]) //with signals
    // this.selectedUser = DUMMY_USERS[randomIndex] //without signals
  }

}
