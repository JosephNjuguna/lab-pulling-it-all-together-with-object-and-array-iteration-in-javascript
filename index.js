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



function numPointsScored(playerName) {
    //takes a player’s name and returns their points scored.
    let homePlayer = gameObject().home.players;
    let awayPlayer = gameObject().away.players;

    const mergedAssign = Object.assign({},homePlayer,awayPlayer)
    // console.log(mergedAssign);
    // for (const key in obj) {
    //     const value = obj[key];
    // }
    // let allPlayers =  { ...homePlayer, ...awayPlayer }
    console.log(mergedAssign[playerName].points);
    return mergedAssign[playerName].points;
}
// numPointsScored("Alan Anderson")

function shoeSize(playerName) {
    //Takes a player’s name as input and returns their shoe size.
    let homePlayer = gameObject().home.players;//take each object of home players
    let awayPlayer = gameObject().away.players;//take each object of away players
    const mergedAssign = Object.assign({},homePlayer,awayPlayer)//marge both players objects into single object
    console.log(mergedAssign[playerName].shoe);//log data just for confirmation
    return mergedAssign[playerName].shoe;//return the value found
}
shoeSize("Jeff Adrien")


function teamColors(teamName) {
    //Takes a team name as input and returns an array of the team’s colors.
    let teamColors;
    for (const key in gameObject()) {
        const element = gameObject()[key];
        // console.log(element);
        if (element.teamName === teamName) {
            teamColors = element.colors
            console.log(element.colors);
        }
    }
    return teamColors;
    // console.log(homePlayer,awayPlayer);
    // const teamDataMerged = Object.assign({},homePlayer,awayPlayer)
    // console.log(teamDataMerged);
}
teamColors("Charlotte Hornets")
teamColors("Brooklyn Nets")

function teamNames() {
    //Returns an array of both team names.
    let teams=[]
    for (const key in gameObject()) {
        const element = gameObject()[key];
        // console.log(element);
        teams.push(element.teamName)
    }
    return teams;
}

function playerNumbers(teamName) {
    //Takes a team name as input and returns an array of all players’ 
    // jersey numbers on that team.
}


function playerStats(playerName) {
    // Takes a player’s name as input and returns an 
    // object with all stats for that player.

    let homePlayer = gameObject().home.players;//take each object of home players
    let awayPlayer = gameObject().away.players;//take each object of away players
    const mergedAssign = Object.assign({},homePlayer,awayPlayer)//marge both players objects into single object
    console.log(mergedAssign[playerName]);//log data just for confirmation
    return mergedAssign[playerName];//return the value found
}
playerStats("Jeff Adrien")

function bigShoeRebounds() {
    // Returns the number of rebounds for the player with the largest shoe size.
    // Steps:
    // Identify the player with the largest shoe size.
    // Return that player’s rebounds.
}