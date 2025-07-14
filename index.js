require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const github={
  "login": "Vivek-kumar2006",
  "id": 185663819,
  "node_id": "U_kgDOCxEBSw",
  "avatar_url": "https://avatars.githubusercontent.com/u/185663819?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Vivek-kumar2006",
  "html_url": "https://github.com/Vivek-kumar2006",
  "followers_url": "https://api.github.com/users/Vivek-kumar2006/followers",
  "following_url": "https://api.github.com/users/Vivek-kumar2006/following{/other_user}",
  "gists_url": "https://api.github.com/users/Vivek-kumar2006/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Vivek-kumar2006/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Vivek-kumar2006/subscriptions",
  "organizations_url": "https://api.github.com/users/Vivek-kumar2006/orgs",
  "repos_url": "https://api.github.com/users/Vivek-kumar2006/repos",
  "events_url": "https://api.github.com/users/Vivek-kumar2006/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Vivek-kumar2006/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vivek Kumar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-10-20T05:52:49Z",
  "updated_at": "2025-06-29T10:28:35Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Vivekdotcom')
})

app.get('/github',(req,res)=>{
  res.json(github)
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at Chai aur Code</h1>')
})
app.get('/youtube',(req,res)=>{

})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
