# Wookie Movies - React

### **Home Page (Displays List of movies)**
![1](./public/home.png)

### **Movie Detail Page (Displays detailed information of movie)**
![2](./public/Details.png)

### **Search Page**
![3](./public/search.png)

### **login Page**
![3](./public/login.png)

This project was generated with [React](https://reactjs.org/docs/getting-started.html) version 18.2.0.

### **_Features Implemented_**

- Interceptors (JWTInterceptor to handle the token in headers for each http Request to implement authentication )
- Caching (CachingInterceptor is created to cache the server side url and response to avoid multiple api calls)
- Pipes (Custom FilterPipe is created to filter images based on group like Action, Drama etc.,)
- Rating (WookieMovieRatingComponent is used to display rating of the movie)
- Search (WookieMovieSearchComponent is used to search the movie typed by the user in the search bar)
- Rest API - GET call Integration
- FlexLayout is used for Displaying of Movies in the landing page
- Bootstrap is used for Search template 


## To run the project

- first clone the repository .
- run `npm i` to install all required packages .
- run `npm start` 
- you will be navigating to the browser at `http://localhost:3000`.
- you will see login page that require from you to login by google account .
- after login in , you will be navigating to the home page that includes the movies .
- Enjoy with wookie movies website.


## Running unit tests

Run `npm run test` to execute the unit tests .


