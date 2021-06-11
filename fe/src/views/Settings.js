import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle('Settings');
    }

    async getHtml() {
        return `
        <div class="settings">
            <h1>Settings</h1>
        </div>
        `;
    }
}