import AbstractView from './AbstractView.js';
export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle('Dashboard');
    }
    async getHtml() {
        const title = 'Dashboard'
        const header = 'What is Lorem Ipsum?';
        const msg = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        const html = `
            <div class="dashboard">
                <h1>${title}</h1>
                <h2>${header}</h2>
                <p>${msg}</p>
            </div>`;
        return html;
    }
}