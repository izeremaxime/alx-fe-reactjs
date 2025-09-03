import axios from "axios";
const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

//"https://api.github.com/search/users?q"
//"location"
//"minRepos"
export const fetchUserData = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    method: "get"
    headers: {
      Authorization: `token ${apiKey}`
    }
  });
  return res.json();
};


