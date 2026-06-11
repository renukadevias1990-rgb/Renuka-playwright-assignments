export class APIClient {
    sendRequest(endpoint, requestBody, requeststatus) {
        if (requestBody !== undefined && requeststatus !== undefined) {
            console.log(`Endpoint: ${endpoint}, Request Body: ${requestBody}, Request Status: ${requeststatus}`);
        }
        else {
            console.log(`Endpoint:${endpoint}`);
        }
    }
    demonstrateSendRequest() {
        // Version 1
        this.sendRequest("/users");
        console.log("----------------");
        // Version 2
        this.sendRequest("/users", '{"name":"Renukadevi"}', true);
    }
}
// Create Object
const apiClient = new APIClient();
// Call Demonstration Method
apiClient.demonstrateSendRequest();
