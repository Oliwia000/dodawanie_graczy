import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEB drużyny';
  lines = ['Minecraft', 'Fortnite', 'Counter-Strike 2'];
  limit = 5;
 
  games: any[] = [];
 
  firstName = '';
  lastName = '';
  username = '';
  groups = '';
 
 
  addUser() {
    if (this.firstName.length <= 0 || this.lastName.length <= 0 || this.username.length <= 0 || this.groups.length <= 0) {
      alert("Nie podano wszystkich danych!");
      return;
    }
 
    const existingGameIndex = this.games.findIndex(g => g.gameName === this.groups);
    if (existingGameIndex !== -1) {
      const newId = this.games[existingGameIndex].players.length + 1;
      if (newId > this.limit) {
        alert("Osiągnięto  już limit graczy!");
        return;
      }
 
      this.games[existingGameIndex].players.push({
        id: this.games[existingGameIndex].players.length + 1,
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username
      });
    } else {
      this.games.push({
        gameName: this.groups,
        players: [{
          id: 1,
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username
        }]
      });
    }
 
    alert("Dodano gracza do " + this.groups)
    this.firstName = '';
    this.lastName = '';
    this.username = '';
  
  }
}
