import { WebComponent } from "./inheritancehomeassignment.js";
export class button extends WebComponent {
    click() {
        super.click();
        console.log(`button specifies click action performed`);
    }
}
