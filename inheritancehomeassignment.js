export class WebComponent {
    selector;
    constructor(selector) {
        this.selector = selector;
    }
    click() {
        console.log(`clicked on component with selector: ${this.selector}`);
    }
    focus() {
        console.log(`focused on component with selector: ${this.selector}`);
    }
}
