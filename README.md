# Documentation of my solution to the react take home test

You'll fin the original link to this exercice [here](https://github.com/dailypay/react-take-home-test)

## How to run the project

<code>yarn start</code>

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

<code> yarn backend </code>

Starts the server which allows the user to access the ballot API.

## My solution

- Started by creating linter in order to check the code and the style of the app. I used eslint and Stylelint for that.

- Then I removed all the unecessary file and code in order to reduce the size of the app.
- I installed Tailwind css and proptypes in order to use it.
- I opted to use the react redux toolkit to manage the state of the app
- I deleted the api folder in the src folder as I decides to get the Api data from the redux store
- I installed cors in order to allow the user to access the API and fix all the cors issues
- I created ballot reducer in order to manage the state and fetch data from the API using the redux toolkit createAsyncThunk
- I created a Ballot component That display the data from
- The ballot component get the states from the ballot reducer and the data from the API
- I created the category and nominee component in order to display the data from the API
