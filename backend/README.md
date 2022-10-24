# EXPRESS MOVIES EXPLORER BACKEND

## Have a look at the project

<https://movies.explorer.project.nomoredomains.sbs/>

`84.252.136.67` - public ip.

## Description

This is a part of a graduation project of the web development course. This repository contains REST API used for user authentication, edition user data and setting favorites in [**Movies Explorer**](https://github.com/artemshchirov/react-movies-explorer-api-full) - a web application that allows to search for documentaries within the database provided by [Beat Film Festival](https://en.beatfilmfestival.ru/).

**Server domain name:**
`beatfilm-explorer.nomoredomains.monster/api`

## Methods and routes used in the project

| Method | Route             | Description                                                                                                                                                                                                                                                |
| ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/users/me`       | returns values of **email** and **name** of the current user                                                                                                                                                                                               |
| PATCH  | `/users/me`       | updates user info with the **email** and **имя** passed in the `body` of the query                                                                                                                                                                         |
| POST   | `/movies`         | creates a movie with the following values set in the `body` **country**, **director**, **duration**, **year**, **description**, **image\*,**trailer**,**nameRU**,**nameEN**,**movieId**and**thumbnail\*\* (method used for creating a "saved movies" page) |
| GET    | `/movies`         | returns all movies that were saved by the user                                                                                                                                                                                                             |
| DELETE | `/movies/movieId` | deletes a saved movie with a certain **\_id**                                                                                                                                                                                                              |
| POST   | `/signup`         | creates a new user with **email**, **password**, **name** set in `body`                                                                                                                                                                                    |
| POST   | `/signin`         | checks **email** and **password** sent in `body` for validity and returns **JWT** in a success case                                                                                                                                                        |

## Validation

- The queries that reach the server are getting validated with via celebrate middleware and joi validation library.
- Validation and server errors are handled

API is protected with authorization middleware.

## Technologies

- Express.js
- API REST
- MongoDB
- Celebrate & Joi validation
- cors
- winston
- helmet
- jsonwebtoken
- limiter
- eslint

## Install the project

```bash
git clone https://github.com/artemshchirov/react-movies-explorer-api-full.git
cd backend
npm install - installs the dependencies;
npm run dev — starts the server with hot-reload;
npm run start — starts the server;
```

### Further improvement

Full repository with both backend ([link to this updated repository](https://github.com/artemshchirov/react-movies-explorer-api-full)) and frontend ([link to the repository](https://github.com/artemshchirov/react-movies-explorer-api-full/tree/main/frontend))
