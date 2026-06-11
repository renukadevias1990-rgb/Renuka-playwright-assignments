import { Browser } from "./classroominheritanceparentclass";
export class chrome extends Browser{

    openIncognito():void{
     
        console.log("Chrome opened in Incognito mode");
    }

    clearCache():void{

        console.log("Chrome clears the cache");
    }
}