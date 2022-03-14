
# Purpose

To be able to quickly render a knex post, and match whatever value that you are trying to post to your database 

User Requirements: 

- Users will be able to be confident in their posts (especially if they have more than one definition for a specific item - e.g., could be "easy" in the UI but the label in the database would be 1)
- Users will be able to feel confident in their updates 


## Directions

See example here - [example](https://github.com/lezzles11/knex_cleandata/tree/master/playground.js)

1. Install the package 

```
npm install knex_cleandata
```

2. Instantiate it in a javascript file

```
const {knexCleanData} = require("knex_cleandata")
```

3. Pass in object configuration 

```
1. knex database
2. table name
3. callback functions (specific ones that you want)
See example here - [example](https://github.com/lezzles11/knex_cleandata/tree/master/callbackExample.js)
4. object to post 

    let data = await cleanKnexPost.init({ knex: knex, table: "datetime", callbacks: callbacks, object: getObject })

```

4. Enjoy! 