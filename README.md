Healthy Human Project



This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components
 - [Reactjs.canvas https://canvasjs.com/react-charts/pie-chart/] for graph graphics


- [Build a Login/Auth App with the MERN Stack — Part 1 (Backend)](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669)
- [Build a Login/Auth App with the MERN Stack — Part 2 (Frontend & Redux Setup)](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82)
- [Build a Login/Auth App with the MERN Stack — Part 3 (Linking Redux with React Components)](https://blog.bitsrc.io/build-a-login-auth-app-with-the-mern-stack-part-3-react-components-88190f8db718)

## Configuration

Make sure to add your own `MONGOURI` from your [mLab](http://mlab.com) database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client

npm install && npm run client-install

// Run client & server with concurrently
npm run dev

//Run client testing
In client directory
npm start

/Run server
In root directory
npm start


// Server runs on http://localhost:5000 and client on http://localhost:3000
```
user login details 
123@123.com
123456
Deployed application at https://still-wildwood-06811.herokuapp.com/

user story 

a user driven project to collect data regarding consumer treatments for common ailments and display the data in graphs.

Homepage
![alt text](https://github.com/SiJBC/HHP2/blob/master/client/public/assetts/img/Screen%20Shot%202020-05-07%20at%207.54.35%20pm.png)

Ailments
![alt text](https://github.com/SiJBC/HHP2/blob/master/client/public/assetts/img/ailments.jpg)

Sample of graphs
![alt text](https://github.com/SiJBC/HHP2/blob/master/client/public/assetts/img/barchart1.jpg)

Project board of completed tasks
![alt text](https://github.com/SiJBC/HHP2/blob/master/client/public/assetts/img/todocomplete.jpg)

Wireframes and workflow
![alt text](https://github.com/SiJBC/HHP2/blob/master/client/public/assetts/img/workflow.jpg)



