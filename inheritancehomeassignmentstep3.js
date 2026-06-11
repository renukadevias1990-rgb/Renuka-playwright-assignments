import { WebComponent } from "./inheritancehomeassignment.js";
export class Textinput extends WebComponent {
    value = "";
    entertext(text) {
        this.value = text;
        console.log(`entered text: ${this.value} in component with selector: ${this.selector}`);
    }
}
