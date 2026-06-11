import { Browser } from "./classroominheritanceparentclass.js";
export class edge extends Browser {
    takesnap() {
        console.log("Screenshot captured in Edge");
    }
    clearcookies() {
        console.log("Clear the cookies in edge browser");
    }
}
