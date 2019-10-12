// initializing the express api
const express = require('express');
const app = express();
const port = 3001;

const redis = require('redis'), 
  client = redis.createClient();

const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res) => {
  // getting the list of jobs from the redis database
  const jobs = await getAsync('github');  

  // this header is required if we're accessing end-points
  // from a different base url (Cors origin resource sharing)
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  return res.send(jobs)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))