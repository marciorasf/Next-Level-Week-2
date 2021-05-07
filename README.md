

<h1 align="center">
   <a href="#"> NLW2 </a>
</h1>

<p align="center">
 <a href="#about">About</a> •
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#author">Author</a> • 
 <a href="#user-content-license">License</a>

</p>


## About

This is a project named Proffy developed during <b>NLW2 - Next Level Week2</b> offered by [Rocketseat](https://rocketseat.com.br/).

It's basically a platform to connect available teachers to students that needs extra classes.

---

## How it works

This project is divided into three parts:
1. Backend (server folder)
2. Frontend (web folder)
3. Mobile (mobile folder)

Both Frontend and Mobile need the Backend to be running to work.

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running the Backend (server)

```bash

# Clone this repository
$ git clone git@github.com:marciorasf/next-level-week-2.git

# go to the server folder
$ cd next-level-week-2/server

# install the dependencies
$ yarn install

# Run the application in development mode
$ yarn dev

# The server will start at port: 3333 - go to http://localhost:3333
```

#### Running the web application (Frontend)

```bash

# Clone this repository
$ git clone git@github.com:marciorasf/next-level-week-2.git

# go to the server folder
$ cd next-level-week-2/web

# install the dependencies
$ yarn install

# Run the application in development mode
$ yarn dev

# The application will open on the port: 3000 - go to http://localhost:3000
```


#### Running the mobile application (Frontend)

```bash

# Clone this repository
$ git clone git@github.com:marciorasf/next-level-week-2.git

# go to the server folder
$ cd next-level-week-2/mobile

# install the dependencies
$ yarn install

# Run the application in development mode
$ yarn dev

```

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[Axios](https://github.com/axios/axios)**

> See the file  [package.json](https://github.com/marciorasf/next-level-week-2/blob/master/web/package.json)

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**

> See the file  [package.json](https://github.com/marciorasf/next-level-week-2/blob/master/server/package.json)

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[Axios](https://github.com/axios/axios)**

> See the file  [package.json](https://github.com/marciorasf/next-level-week-2/blob/master/mobile/package.json)

---

## Author

### Márcio Souza Filho

<a href="mailto:marciorasf@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />    
</a>

<a href="https://www.linkedin.com/in/marciorasf/">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />    
</a>

---

## License

This project is under the license [MIT](./LICENSE).
