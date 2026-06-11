export class Browser {
    browserName;
    browserVersion;
    constructor(browserName, browserVersion) {
        this.browserName = browserName;
        this.browserVersion = browserVersion;
    }
    openURL() {
        console.log(`${this.browserName} opening the URL`);
    }
    closebrowser() {
        console.log(`${this.browserName} browser gets closed`);
    }
    navigateBack() {
        console.log(`${this.browserName} navigated back `);
    }
}
