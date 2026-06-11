import{CanaraBank} from "./abstractcanarabank";

export class Amazon extends CanaraBank{

    cashOnDelivery():void{
        console.log("Amazon cash on delivery payment selected");
    }
    upiPayments():void{
      console.log("UPI payment selected");
    }
     cardPayments():void{
        console.log("Card payment completed");
    }
    internetBanking():void{
        console.log("Internet banking payment selected");
    }

}
const amazon = new Amazon();
amazon.cashOnDelivery();
amazon.upiPayments();
amazon.cardPayments();
amazon.internetBanking();
amazon.recordPaymentdetails();
amazon.recordPaymentdetails();