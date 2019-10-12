/* 
This file incorporates the cron library. 
Now we can use cron jobs.
Cron jobs run a task on an interval.
*/ 

/* 
This block of code runs a node process
where it is importing the library.
This '('* * * * *')' is called a cron 
schedule expression
*/
let CronJob = require('cron').CronJob;
let fetchGithub = require('./tasks/fetch-github');

// fetch github jobs
new CronJob('*/1 * * * *', fetchGithub, null, true, 'Europe/London');