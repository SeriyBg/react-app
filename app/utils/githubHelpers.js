import axios from 'axios';

const id = 'YOUR_CLIENT_ID';
const secret = 'YOUR_CLIENT_SECRET';
const param = `?client_id=${id}&client_secret=${secret}`;

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}${param}&per_page=100`);
}

export async function getPlayersInfo(players) {
  try {
    const info = await axios.all(players.map((username) => getUserInfo(username)));
    return info.map((user) => user.data);
  } catch (error) {
    console.warn('Error in getPlayersInfo ', error);
  }

}