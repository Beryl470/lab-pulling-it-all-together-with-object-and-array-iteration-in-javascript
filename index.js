function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// Helper function to get all players from both teams into one array
function getAllPlayers() {
  const game = gameObject();
  const homePlayers = Object.values(game.home.players);
  const awayPlayers = Object.values(game.away.players);
  return [...homePlayers, ...awayPlayers];
}

// Helper function to find a player's stats by their name
function findPlayerByName(name) {
  const game = gameObject();
  // Check home team first
  if (game.home.players[name]) {
    return game.home.players[name];
  }
  // Then check away team
  if (game.away.players[name]) {
    return game.away.players[name];
  }
  // Return null if player not found
  return null;
}

// functions

function numPointsScored(playerName) {
  const player = findPlayerByName(playerName);
  return player ? player.points : 0; // Return 0 if player not found
}

function shoeSize(playerName) {
  const player = findPlayerByName(playerName);
  return player ? player.shoe : 0; // Return 0 if player not found
}

function teamColors(teamName) {
  const game = gameObject();
  if (game.home.teamName === teamName) {
    return game.home.colors;
  } else if (game.away.teamName === teamName) {
    return game.away.colors;
  }
  return []; // Return empty array if team not found
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  let players;
  if (game.home.teamName === teamName) {
    players = Object.values(game.home.players);
  } else if (game.away.teamName === teamName) {
    players = Object.values(game.away.players);
  } else {
    return []; // Team not found
  }

  return players.map(player => player.number);
}

function playerStats(playerName) {
  return findPlayerByName(playerName);
}

function bigShoeRebounds() {
  const allPlayers = getAllPlayers();
  let largestShoe = 0;
  let playerWithLargestShoe = null;

  for (const player of allPlayers) {
    if (player.shoe > largestShoe) {
      largestShoe = player.shoe;
      playerWithLargestShoe = player;
    }
  }

  return playerWithLargestShoe ? playerWithLargestShoe.rebounds : 0;
}

function mostPointsScored() {
  const allPlayers = getAllPlayers();
  let topScorer = null;
  let maxPoints = 0;

  for (const player of allPlayers) {
    if (player.points > maxPoints) {
      maxPoints = player.points;
      topScorer = player;
    }
  }
  return topScorer;
}

function winningTeam() {
  const game = gameObject();

  const homePoints = Object.values(game.home.players).reduce((total, player) => total + player.points, 0);
  const awayPoints = Object.values(game.away.players).reduce((total, player) => total + player.points, 0);

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";
  let playerWithLongestName = null;

  const homeEntries = Object.entries(game.home.players);
  const awayEntries = Object.entries(game.away.players);
  const allEntries = [...homeEntries, ...awayEntries];

  for (const [playerName, playerStats] of allEntries) {
    if (playerName.length > longestName.length) {
      longestName = playerName;
      playerWithLongestName = playerStats;
    }
  }

  return playerWithLongestName;
}

function doesLongNameStealATon() {
  const longestNamePlayer = playerWithLongestName();
  
  // Find the player with the most steals
  const allPlayers = getAllPlayers();
  let topStealer = null;
  let maxSteals = 0;

  for (const player of allPlayers) {
    if (player.steals > maxSteals) {
      maxSteals = player.steals;
      topStealer = player;
    }
  }

  // Compare the two player objects. If they are the same object, the condition is true.
  return longestNamePlayer === topStealer;
}