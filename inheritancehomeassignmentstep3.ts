import{WebComponent} from "./inheritancehomeassignment.js";
export class Textinput extends WebComponent{

    value:string="";
     
    entertext(text:string): void{
        this.value=text;
        console.log(`entered text: ${this.value} in component with selector: ${this.selector}`);
    }


}
