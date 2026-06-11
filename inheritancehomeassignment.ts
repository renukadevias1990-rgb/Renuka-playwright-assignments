export class WebComponent {

    constructor(public selector:string)
        {}
         
         click(): void{

            console.log(`clicked on component with selector: ${this.selector}`)
         }

        focus(): void{
            console.log(`focused on component with selector: ${this.selector}`)
        }

        }
    

