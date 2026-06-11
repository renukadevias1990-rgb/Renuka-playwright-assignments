import { CanaraBank } from "./abstractcanarabank.js";
export class Amazon extends CanaraBank {
    cashOnDelivery() {
        console.log("Amazon cash on delivery payment selected");
    }
    upiPayments() {
        console.log("UPI payment selected");
    }
    cardPayments() {
        console.log("Card payment completed");
    }
    internetBanking() {
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
