import Dashboard from '../views/Dashboard.js';
import Posts from '../views/Posts.js';
import Settings from '../views/Settings.js';
import Contact from '../views/Contact.js';

import JSRouter from './js-router.js';

const router = new JSRouter();

const routes = [
    {path: '/', view: Dashboard},
    {path: '/posts', view: Posts},
    {path: '/settings', view: Settings},
    {path: '/contact', view: Contact}
];

router.init(routes, 'app');