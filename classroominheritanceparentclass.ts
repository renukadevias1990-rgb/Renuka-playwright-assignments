export class  Browser{

     browserName : string;
    browserVersion :string;
constructor(browserName: string, browserVersion: string){
    this.browserName = browserName;
    this.browserVersion = browserVersion;
}
    openURL():void{
        console.log(`${this.browserName} opening the URL`);
    }
   closebrowser():void{
    console.log(`${this.browserName} browser gets closed`);
 
}
   navigateBack():void{
     console.log(`${this.browserName} navigated back `);

   }
}