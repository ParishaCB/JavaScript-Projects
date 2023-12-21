const team = {
    _players: [
      {firstName: 'david', lastName: 'warner', age: 47},
      {firstName: 'pete', lastName: 'wheeler', age: 50},
      {firstName: 'zack', lastName: 'knight', age: 40}
      ],
    _games: [
      {opponent: 'werewolves', teamPoints: 10, opponentPoints: 5},
      {opponent: 'tigers', teamPoints: 5, opponentPoints: 10},
      {opponent: 'wolves', teamPoints: 6, opponentPoints: 9},
      ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName, 
        age: newAge
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  }
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);