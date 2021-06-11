const navigateToRoute = url => {
    history.pushState(null, null, url);
    jsRouter();
};

const jsRouter = async () => {
    const routes = [
        {path: '/', view: () => console.log('Viewing Dashboard')},
        {path: '/posts', view: () => console.log('Viewing Posts')},
        {path: '/settings', view: () => console.log('Viewing Settings')}
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find( potentialMatche => potentialMatche.isMatch);

    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    console.log(match.route.view());
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', event => {
        if(event.target.matches('[data-link')){
            event.preventDefault();
            navigateToRoute(event.target.href);
        }
    })
});