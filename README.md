module-index
============

The module-index module will include all it's sibling modules and return them as an export.

Example
-------

Say you have a directory structure like so:

```
- app/
  - controllers/
    - welcome.js
    - blog.js
    - contact.js
  - index.js
```

Then the you can access all the controllers by adding a `controllers/index.js` file like so:

```js
// app/controllers/index.js
require('module-index')(module);
```

```js
// app/index.js
var controllers = require('./controllers'),
    app         = require('apparator')();

app.get('/welcome', controllers.welcome.index);
app.get('/blogs', controllers.blog.list);
// ...
```
