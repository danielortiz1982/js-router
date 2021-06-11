import AbstractView from './AbstractView.js';
export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle('Posts');
    }
    async getHtml() {
        const title = 'Post';
        const html = `
            <div class="posts">
                <h1>${title}</h1>
                <ul>
                    <li>Post 1</li>
                    <li>Post 2</li>
                    <li>Post 3</li>
                </ul>
            </div>`;
        return html;
    }
}