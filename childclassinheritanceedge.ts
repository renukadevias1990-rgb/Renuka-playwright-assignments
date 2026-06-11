import { Browser } from "./classroominheritanceparentclass";    
export class edge extends Browser{

    takesnap():void{

        console.log("Screenshot captured in Edge");
    }

    clearcookies():void{

        console.log("Clear the cookies in edge browser");
    }
}