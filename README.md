
### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server. I would reccomend opening 2 terminal windows with the chatty_server directory open in one, and the react_simple_boilerplate in the other. Run npm start in react_simple_boilerplate and node chatty_server.js in chatty_server.

```
npm install
npm start
open http://localhost:3000
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)


### Screenshots

!["Notification displayed when user changes name"](https://github.com/bryankenny/Chatty-App1/blob/5c023ffe30341fe62fbb8276f6fb7974b4dd7569/docs/UserChangeName.png?raw=true)

!["Notification displayed when user changes name"](https://github.com/bryankenny/Chatty-App1/blob/master/docs/2-Users-Online.png?raw=true)


!["Notification displayed when user changes name"](https://github.com/bryankenny/Chatty-App1/blob/master/docs/Users-Messaging-Each-Other.png?raw=true)

