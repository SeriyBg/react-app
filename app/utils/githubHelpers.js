import axios from 'axios';

const id = 'YOUR_CLIENT_ID';
const secret = 'YOUR_CLIENT_SECRET';
const param = `?client_id=${id}&client_secret=${secret}`;

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}${param}&per_page=100`);
}

function getRepos(username){
  return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);
}

function getTotalStars(repos) {
  return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0);
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => (
      {
        followers: player.followers,
        totalStars: totalStars
      }
    ));
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ];
}

export async function getPlayersInfo(players) {
  try {
    const info = await axios.all(players.map((username) => getUserInfo(username)));
    return info.map((user) => user.data);
  } catch (error) {
    console.warn('Error in getPlayersInfo ', error);
  }
}

export function battle(players){
  const playerOneData = getPlayersData(players[0]);
  const playerTwoData = getPlayersData(players[1]);
  return axios.all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch((err) => {
      console.warn('Error in getPlayersInfo: ', err);
    });
}