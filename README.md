# JSRouter
> JSRouter is an easy to use JavaScript client side router.

##### Clone JSRouter
    git clone https://github.com/danielortiz1982/js-router.git

##### Via NPM
    npm install jsrouter

##### (Optional) To remove/delete demo directory, open up a terminal window and paste
     rm -rf demo

## JSRouter Usage
> JSRouter is a ES6 exported class that helps create and manage client side routes and views.
##### Import the JSRouter into your own JavaScript file.
```js
import JSRouter from './js-router.js';
```

##### Create a new instance of the JSRouter constructor
```js
const router = new JSRouter();
```

##### Router configuration
> To create a router configuration define an array containing objects, each object will define a route along with a view.
```js
const routes = [
    {path: '/', view: Home},
    {path: '/dashboard', view: Dashboard},
    {path: '/posts', view: Posts},
    {path: '/settings', view: Settings},
    {path: '/contact', view: Contact}
];
```