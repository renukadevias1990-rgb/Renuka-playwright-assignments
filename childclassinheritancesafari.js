import { Browser } from "./classroominheritanceparentclass.js";
export class safari extends Browser {
    readermode() {
        console.log("safari readermode enabled");
    }
    fullscreenmode() {
        console.log("safari fullscreenmode enabled");
    }
}
