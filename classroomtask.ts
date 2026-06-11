export class Reporter {

    // Overload Signatures
    reportStep(msg: string, status: string): void;
    reportStep(msg: string, status: string, snap: boolean): void;

    // Implementation
    reportStep(msg: string, status: string, snap?: boolean): void {

        if (snap !== undefined) {
            console.log(
                `Message: ${msg}, Status: ${status}, Snapshot Taken: ${snap}`
            );
        } else {
            console.log(
                `Message: ${msg}, Status: ${status}`
            );
        }
    }

    demonstrateReportStep(): void {

        // Calling overloaded method with 2 arguments
        this.reportStep("Login Successful", "PASS");

        // Calling overloaded method with 3 arguments
        this.reportStep("Logout Successful", "PASS", true);
    }
}

// Create Object
const reporter = new Reporter();

// Call demonstration method
reporter.demonstrateReportStep();