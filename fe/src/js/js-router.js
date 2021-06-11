export default class JSRouter {
    constructor(){
    }
    init(routes, app){
        const navigateToRoute = url => {
            history.pushState(null, null, url);
            jsRouter();
        };
        const jsRouter = async () => {
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
            document.querySelector(`#${app}`).innerHTML = await new match.route.view().getHtml();
        };
        window.addEventListener('popstate', jsRouter);
        document.addEventListener('DOMContentLoaded', () => {
            document.body.addEventListener('click', event => {
                if(event.target.matches('[data-link]')){
                    event.preventDefault();
                    navigateToRoute(event.target.href);
                }
            });
            jsRouter();
        });
    }
}