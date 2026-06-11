import{WebComponent} from "./inheritancehomeassignment.js";
export class button extends WebComponent{

    override click(): void {
        super.click();
        console.log(`button specifies click action performed`);
    }
}