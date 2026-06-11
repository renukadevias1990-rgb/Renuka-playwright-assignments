import { Browser } from "./classroominheritanceparentclass.js";
export class chrome extends Browser {
    openIncognito() {
        console.log("Chrome opened in Incognito mode");
    }
    clearCache() {
        console.log("Chrome clears the cache");
    }
}
