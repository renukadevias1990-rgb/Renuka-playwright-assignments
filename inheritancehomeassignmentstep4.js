import { button as Button } from "./inheritancehomeassignmentstep2.js";
import { Textinput } from "./inheritancehomeassignmentstep3.js";
function testComponents() {
    const button = new Button("loginbutton");
    const textinput = new Textinput("username");
    button.focus();
    button.click();
    console.log("-----------");
    textinput.focus();
    textinput.entertext("renukadevi");
}
testComponents();
