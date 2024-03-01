export class ok1 extends HTMLElement {

    constructor() {
        super();
        console.log("Constructor");
    }

    connectedCallback() {
        console.log("Connected");

        this.hour12 = JSON.parse(this.getAttribute("hour12"));
        console.log(this.hour12);

        this.timerId = setInterval(() => {
            this.innerHTML = new Date().toLocaleString('en-US', { hour12: this.hour12 });
        }, 999);

        // '<h1>My tag start</h1>' +
        // new Date().toLocaleString() +
        // '<h1>My tag end</h1>'
    }


    disconnectedCallback() {
        clearInterval(this.timerId);
    }
}


export class ok2 extends HTMLElement {

    constructor() {
        super();
        console.log("Constructor");
    }

    connectedCallback() {
        console.log("Connected");

        this.hour12 = JSON.parse(this.getAttribute("hour12"));
        console.log(this.hour12);

        this.timerId = setInterval(() => {
            this.innerHTML = new Date().toLocaleString('en-US', { hour12: this.hour12 });
        }, 999);

        // '<h1>My tag start</h1>' +
        // new Date().toLocaleString() +
        // '<h1>My tag end</h1>'
    }


    disconnectedCallback() {
        clearInterval(this.timerId);
    }
}