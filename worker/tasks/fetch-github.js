/* 
Implements the github api and is used to fetch
the jobs.
The 'node-fetch' library is installed to do a 
back-end url fetch request.
*/
const fetch = require('node-fetch');
const redis = require('redis'), 
  client = redis.createClient();

const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseUrl = "https://jobs.github.com/positions.json";

const fetchGithub = async () => {
  let resultCount = 1, onPage = 0;

  // holds the results of all the jobs 
  const allJobs = [];

  // iterating through all the pages to get all results,
  // until I get an empty page
  while (resultCount > 0) {
    // 'await': Returns the fulfilled value of the 
    // promise, or the value itself if it's not a Promise.
    // Uses the url of the api to fetch the jobs.
    const response = await fetch(`${baseUrl}?page=${onPage}`); // adding the query string

    // 'await' be used because 'response.json()' is an
    // async function
    const jobs = await response.json();
    
    // creating a single array
    allJobs.push(...jobs);
    resultCount = jobs.length;

    console.log('got ', resultCount, ' jobs');
    onPage++;
  }

  console.log('got ', allJobs.length, ' jobs');
  const success = await setAsync('github', JSON.stringify(allJobs));
  console.log({success});
}

fetchGithub();

module.exports = fetchGithub