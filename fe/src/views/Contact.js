import JSRouter from '../js/js-router.js'
export default class extends JSRouter {
    constructor(){
        super();
        this.setTitle('Contact');
    }
    async getHtml() {
        const title = 'Contact'
        const header = 'What is Lorem Ipsum?';
        const msg = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        const html = `
            <div class="dashboard">
                <h1>${title}</h1>
                <h2>${header}</h2>
                <div class="row">
                    <div class="col-md-8">
                        <p>${msg}</p>
                    </div>
                    <div class="col-md-4">
                        <div class="form-box">
                            <h2>Get in touch!</h2>
                            <hr />
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                                </div>
                                <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <br />
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        <div>
                    </div>
                </div>
            </div>`;
        return html;
    }
}