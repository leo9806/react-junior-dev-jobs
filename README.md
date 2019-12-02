# Junior Job Finder
I have created this aplication to further explore the backend development and to help myself find a job.

The application uses GitHub Jobs API to retrieve and display all the currently available jobs. 
All the data fetched is stored in a Redis Data Store. I have created an Express REST API to retrieve the data from the database.

I have used CRON to set up a timer for the application to check and retrieve any new jobs posted on the Jobs API (eg. every 30 mins).

I have developed an algorithm to filter out any jobs with the words 'senior, lead' and etc., from the job title, so I can only get junior/graduate
roles.

The front end of the pplication is created with React.js and material UI.

Here is a demo of the app:
https://youtu.be/5MypU1nY55M
