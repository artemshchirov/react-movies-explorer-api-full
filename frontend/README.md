# REACT MOVIES EXPLORER FRONTEND

## Have a look at the project

<https://movies.explorer.project.nomoredomains.sbs/>

## Description

Client part of a graduation project of the web development course. This is a multiple page website with a simple landing on the main page and search and filter functionality available after user registration. This is a React-based project.

## Functionality

### Unauthorized user

- Sees the static landing of the main page
- Can register using username and email
- Can log in after the registration

### Authorized user

- Edit their username and email
- Search for movies in the database under key words
- Filter movies according to their length
- Save favorite movies in favorites
- Delete movies from favorites

### Layout

- Layout is created according to individual [Figma template](<https://www.figma.com/file/1QBwqTHjFN6CDo0M39JUaL/Diploma-(Main)?node-id=344%3A0>)
- Element positioning using grids and flexbox
- Adaptive layout - optimized for different screen resolutions (mobile, tablet, desktop)
- The number of displayed cards varies according to the screen size. If search result consists of multiple movies, initial amount of them will be displayed right away, more can be opened when clicking on "more" button.

**Important**: according to the brief the page with movies should be empty before user carries out the first search. To see all available movies press SPACE+ENTER when in the search bar.

## API used

- [external API](https://api.nomoreparties.co/beatfilm-movies) provided by Beat Film Festival - database with movies
- [Backend part of the service written in Express.js](https://github.com/artemshchirov/react-movies-explorer-api-full/tree/main/backend) - responsible for user registration, authorization, saving movies in favorites, changing user information

## Routes

- `/` — main page
- `/movies` — movies library
- `/saved-movies` — library with favorite movies
- `/profile` — user profile
- `/signin` & `/signup` — pages of registration and authorization
- `/*` — 404 page

## Technologies used

- HTML, CSS
- BEM-methodology
- Grid layout, Flexbox, media queries, adaptive layout
- JavaScript
- React.js, JSX
- React Router DOM
- Working with forms
- Localization i18next

## Some of the skills used are

- Project structures
- Debugging and React DevTools
- Hooks and effect dependencies
- Lifting state
- Creating and subscribing to a context

## Start project locally

```bash
git clone https://github.com/artemshchirov/react-movies-explorer-api-full.git
cd frontend
npm install
npm run start
```

### Further improvement

Full repository with both frontend ([link to this updated repository](https://github.com/artemshchirov/react-movies-explorer-api-full/tree/main/frontend)) and backend ([link to the repository](https://github.com/artemshchirov/react-movies-explorer-api-full))
