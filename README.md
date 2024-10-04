# listing-mini-project-frontend

## Frontend setup

To run the frontend: 
  <b>npm run dev</b>

To start the frontend with MSW (must be run alongside npm run test):
  <b>npm run dev-msw</b>

To start the frontend test:
 <b> npm run test</b>

To create the mockServiceWorker.js file:
 <b> npm run msw-init</b>

 #### Note for testing:

 <p>
   Due to Axios making request to the backend while the MSW is on, testing on the front end has been limited as the application can only get data from the backend and not test data from MSW, although MSW is turned on.
   This was an issue raised here: 
   <li>https://stackoverflow.com/questions/77852097/msw-handler-correctly-intercepting-request-but-still-resulting-axios-network-er</li>
   <li>https://stackoverflow.com/questions/77804153/reactjs-msw-mock-handlers-failing-with-error-network-request-failed.</li> 
   
 <p>However the solutions are not workable and quite limited.</p>
 <p>
   Therefore, in order to run successful test (test passed non-testing environment), before testing:
     <li>run both frontend (npm run dev-msw) and backend(npm run start)</li>
     <li>upload data.csv file on the browser</li>
     <li>run tests (npm run test) </li>
 </p>



## Backend setup
Github repo: https://github.com/shadowbattalion/listing-mini-project-backend2

To run the backend:
<b>npm run start</b>

## WalkThrough

<p>Step 1</p>
<p>Both Upload page and List page are currently empty</p>

![image](https://github.com/user-attachments/assets/3c191c57-be14-4253-a604-51b32db7dbe6)

![image](https://github.com/user-attachments/assets/cb04bcb1-2e0d-49d0-9929-2435d0b770be)

<p>Step 2</p>
<p>Upload a file and click on Upload with the data.csv file</p>

![image](https://github.com/user-attachments/assets/ddb6d60e-40fa-4d27-9e7b-449937d12238)

<p>Step 3</p>
<p>Click on the List button at the Navbar to see the list retrieved from the backend</p>

![image](https://github.com/user-attachments/assets/869e2365-9a22-451b-bba1-afc55901b813)

<p>Step 4</p>
<p>Due to time constraint, there is no user friendly way to delete the uploaded file from the backend, hence should be deleted manually. The application can still work without deleting the file as it will overwrite the data.csv file but deletion is required in order to demonstrate the whole process.</p>

![image](https://github.com/user-attachments/assets/d95b24fb-9598-45c6-b782-f66c7ec12013)


### Objectives met

- Upload a CSV file
- Appropriate feedback to the user on the upload progress.

- List the data uploaded 
- With pagination.

- Search data from the uploaded file. 
- The web application should be responsive while:
	1) Listing of data 
	2) Searching of data.




### Issues faced
