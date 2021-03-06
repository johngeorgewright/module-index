module-index
============

The module-index module will include all it's sibling modules and return them as an export.

Installation
------------

```sh
$ npm install module-index
```

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

Infact... you can entirley skip out making a new file:

```js
// app/index.js
var controllers = require('module-index')('./controller');
```

