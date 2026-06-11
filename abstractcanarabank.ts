import{Payments} from "./abstractioninterface.js";

export abstract class CanaraBank implements Payments{
   
    abstract cashOnDelivery(): void;    
    abstract upiPayments(): void;
    abstract cardPayments(): void;
    abstract internetBanking(): void;

    recordPaymentdetails():void{
        console.log("payment details recorded successfully");
    }

}