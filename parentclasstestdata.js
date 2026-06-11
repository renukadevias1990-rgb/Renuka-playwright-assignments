export class SuperTestData {
    enterCredentials = "string";
    navigateToHomePage = "string";
    constructor(enterCredentials, navigateToHomePage) {
        this.enterCredentials = enterCredentials;
        this.navigateToHomePage = navigateToHomePage;
    }
    enterCredentialsAction() {
        console.log("user enter the credentials");
    }
    navigateToHomePageAction() {
        console.log("user navigates to the home page");
    }
}
