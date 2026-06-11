export class SuperTestData {
    enterCredentials = "string";
    navigateToHomePage = "string";

    constructor(enterCredentials: string, navigateToHomePage: string) {
        this.enterCredentials = enterCredentials;
        this.navigateToHomePage = navigateToHomePage;
    }

    enterCredentialsAction(): void {
        console.log("user enter the credentials");
    }

    navigateToHomePageAction(): void {
        console.log("user navigates to the home page");
    }
}

