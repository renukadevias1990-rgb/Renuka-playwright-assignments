export class Reporter {
    // Implementation
    reportStep(msg, status, snap) {
        if (snap !== undefined) {
            console.log(`Message: ${msg}, Status: ${status}, Snapshot Taken: ${snap}`);
        }
        else {
            console.log(`Message: ${msg}, Status: ${status}`);
        }
    }
    demonstrateReportStep() {
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
