import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle('Posts');
    }

    async getHtml() {
        return `
        <div class="posts">
            <h1>Posts</h1>
        </div>
        `;
    }
}