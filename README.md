# BokWyrm Google Book Search Engine

By: Logan Sutton  

## Description  
    
BokWyrm is a simple bookfinder app that uses a React front-end development package paired with a MongoDB back-end database running on an Express and Node.js server and using GraphQL running on an Apollo Server. It takes advantage of a Google Book search third party API to allow registered users to search for any book found on Google Books--complete with title, authors, a short description of the book, an image, and a link if present--and save their finds, whether as a general reading list or a wish list for purchase.

BokWyrm is refactored from a ready-built Google Books Search API built on a RESTful API. The origin code has been changed to take advantage of GraphQL and the Apollo Server package while still retaining its MERN stack base.

[Link to App deployed on Heroku](https://bokwyrm.herokuapp.com/)

## Table of Contents  

- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  
- [How to Contribute](#how-to-contribute)  
- [Tests](#tests)  
- [Questions](#questions)  

## Installation  
    
BokWyrm is deployed to Heroku at the URL listed above. A user need only register with a username, email, and password--or log in with an email and password if they already have an account. 

An interested user may also clone the code from the GitHub repository. After running `npm install` from the command line to install all dependencies and `npm run build` to run the React webpack build, the user need only run `npm start` to initialize the server and use the app. Users may interface directly with the database using MongoDB Atlas or through the GraphQL UI.

## Usage  

Upon landing on the homepage, the user is greeted with the Google Books search interface as well as the option to `login` or `Sign Up` for an account:

![Loading Screen](https://user-images.githubusercontent.com/103286445/187581299-0a912af3-79ad-49bd-8f9d-e35bd6d27cfd.png)

If the user wishes to sign up, they are presented with a prompt to enter a username, a valid email, and password. A registered user may also login with only their registered email and password.
![Signup Prompt](https://user-images.githubusercontent.com/103286445/187581381-90b4e95b-6121-4dc5-9717-9220d3eaab10.png)

After logging in, the user is returned to the search engine home page with the option to `Logout` again or to view their saved book results.
![Home after login](https://user-images.githubusercontent.com/103286445/187581438-0a1149eb-6796-4aa8-b748-f6beee42ac79.png)

Whether logged in or not, a user may make use of the Google Books search engine by entering any keyword or title, which will return a list of option. Books are headed by an image, followed by their list of authors, title, description of the book's contents, and a link to a website related to the book, where available.
Users who are logged in are also presented with a button to save a given book to their save list.
![Search results](https://user-images.githubusercontent.com/103286445/187581487-6c91dfe2-1a4a-41f7-b5f8-5de26a6bbc4d.png)

Upon selecting the Saved Books directory, a registered user is shown all books that they have saved to date. They also have the option to delete any given book from their list.
![User's saved books](https://user-images.githubusercontent.com/103286445/187581519-674c722c-9345-44e4-9242-4a870337faf5.png)

## License  
    
All rights reserved.

Copyright (c) 2022 Logan Sutton.  

## How to Contribute  
  
This app was created as a graded class challenge. No contribution is requested at present.  

## Tests  
    
No tests are suggested at this time.  

## Questions  
    
[LSton40 GitHub](https://github.com/LSton40)  

If you have any questions, please contact me at logan.sutton@gmail.com.
