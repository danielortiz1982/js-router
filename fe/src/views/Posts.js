import JSRouter from '../js/js-router.js'
export default class extends JSRouter {
    constructor(){
        super();
        this.setTitle('Posts');
    };
    async getHtml() {
        let html = '';
        const title = 'Post';
        const postsData = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await postsData.json();
        html += `<div class="posts container">`;
        posts.forEach(element => {
            html += `<div class="post" id="post-id-${element.id}">`;
            html += `<h2>${element.title}</h2>`;
            html += `<h6>By: ${element.userId}</h6>`;
            html += `<p>${element.body}</p>`;
            html += `</div>`;
        });
        html += `</div>`

        return html;
    };
};