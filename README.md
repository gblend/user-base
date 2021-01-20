# User-Base [![Build Status](https://travis-ci.com/gblend/user-base.svg?token=nAPp6xdHhmekbobWYDps&branch=master)](https://travis-ci.com/gblend/user-base)  Tests: Not completed


**Ubase** is a dashboard for accessing random users' directory information. Ubase dashboard houses features such as 
searching users' directory by country, categories such as male, female, ase well as search option and filter to make 
record retrieval seamless. The users' information accessible includes but not limited to: full name, email, mobile number, 
address, age, country, ect.


#### Link To Deployed Site [Check Deployed Site](https://users-base.herokuapp.com/all-users)


## Project setup
The installation and running of the project locally:

  * Clone the project repo to your machine! 
  * Open the project and open the root folder on your terminal: `cd user-base` 
  
   - Install project dependencies:
   Run the command below on your terminal, inside the project root folder: 
```
npm install
```
   - Start dev server (Compiles and hot-reloads for development):
```
npm run serve
```

### Compile and generate minified build for production
```
npm run build
```

### Run the unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## Technologies Used
- API: [Random User Generator](https://randomuser.me/) => The dynamic data used on the app were retrieved from Random User 
Generator REST API.
    
- Frontend: [VueJs Framework](https://vuejs.org/): => an open-source model–view–viewmodel front end JavaScript framework
 for building user interfaces and single-page applications. It Component-based architecture is ideal for building apps with 
 the intention of future scaling.
 
 - Frontend (Layout): [HTML](): => HTML is markup web markup language which was used for structuring and building the layout of the application.
 
- Routing [Vue Router](https://router.vuejs.org/): => Routing for the SPA was implemented using vue router library.
- State Management [Vuex](https://vuex.vuejs.org/): => Vuex is a state management pattern + library for Vue.js applications. 
It was used as a centralized store for all the components in the application.

- Styling (CSS) [Tailwind CSS](https://tailwindcss.com/): => This is a utility first css framework. It was used for styling the application.

- Unit Test [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com): => Mocha, Chai are JavaScript test framework/library for Node.js programs, featuring browser support, 
asynchronous testing, test coverage reports, and use of any assertion library.

- Http Client  [Axios](https://github.com/axios/axios) => Axios is a promise based HTTP client for browser and nodejs.
 It was used in making request to the API endpoints.

