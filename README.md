# RDJs - Request for Dummies in JavaScript


The Library is designed to be the most agile and simple way to make http calls. It is compatible with es6.
## Instalation
Via Bower:

    $ bower install RDJs -save
  
**Quick usage guide**

Below you can find a quick reference for the most common operations you need to perform to use RDJs.

1- Performing a GET request
```js
// Make a request for all repos
RDJs.get('https://api.github.com/users/diogenespolanco/repos')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
2- Performing a POST request
```js
// Make a request for a user with a given ID
RDJs.post('https://api.github.com/authorizations', {
    "scopes":[
       "public_repo"
    ]
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
3- Performing a PUT request
```js
// Make a request for a user with a given ID
RDJs.put('https://api.github.com/user/whatever', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
3- Performing a DELETE request
```js
// Make a request for a user with a given ID
RDJs.delete('https://api.github.com/user/whatever')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
``` 
## Project Setup

This project uses [gulp](http://gulpjs.com/) as its build system. 

- Install gulp: `$ npm install -g gulp`

1. Install dependencies: `$ npm install`
2. Build and run: `$ gulp buildrun`
3. Run:`$ npm start`

## Testing

This project usings [mocha](http://visionmedia.github.io/mocha/) for unit testing. Install mocha:

- `$ npm install -g mocha`

To compile and test run:

-  `$ gulp && mocha`

## License

MIT
