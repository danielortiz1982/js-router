import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle('Dashboard');
    }

    async getHtml() {
        return `
        <div class="deashboard">
            <h1>Dashboard</h1>
        </div>
        `;
    }
}