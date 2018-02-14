# express-laravel-passport
You want a middleware support express get authorization from laravel-passport-structured database, this will help you.


## How to install 

```
npm install express-laravel-passport
```

or 

```
npm install express-laravel-passport --save
```

if you use yarn

```
yarn add express-laravel-passport
```

## How to use

1. Define your sequelize

```javascript
const sequelize = new Sequelize('your_mysql_database', 'your_mysql_username', 'your_mysql_password', {
  host: 'your_mysql_host',
  dialect: 'mysql'
});
```

2. import the library

```
import passport from 'express-laravel-passport';
```

3. serve in express server

```javascript
express.use('/', passport(sequelize), ...);
```

4. serve in graphql server (optional)

```javascript
graphQLServer.use('/graphql', passport(sequelize), cors(), bodyParser.json(), graphqlExpress(req => {
  return ({
    schema: schema,
    context: req
  });
}));
``` 

5. get user_id in express server

```javascript
const user_id = request.user_id;
if (user_id) {
  // logged in
} else {
  // not logged in || missing authentication header || token wrong
}
```

6. get user_id in graphql server (optional)

```javascript
const resolvers = {
  Query: {
    async testQuery(_, args, request, info) {
      const user_id = request.user_id;
      if (user_id) {
        // logged in
      } else {
        // not logged in || missing authentication header || token wrong
      }
    }
  }
}
```