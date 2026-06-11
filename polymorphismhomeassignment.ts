export class APIClient {
    sendRequest(endpoint: string): void;
    sendRequest(endpoint: string, requestBody: string, requeststatus: boolean): void;
    sendRequest(endpoint: string, requestBody?: string, requeststatus?: boolean): void {

        if (requestBody !== undefined && requeststatus !== undefined) {
            console.log(`Endpoint: ${endpoint}, Request Body: ${requestBody}, Request Status: ${requeststatus}`);
        }
        else {
            console.log(`Endpoint:${endpoint}`);
        }
    }
    demonstrateSendRequest(): void {

        // Version 1
        this.sendRequest("/users");

        console.log("----------------");

        // Version 2
        this.sendRequest(
            "/users",
            '{"name":"Renukadevi"}',
            true
        );
    }
}

// Create Object
const apiClient = new APIClient();

// Call Demonstration Method
apiClient.demonstrateSendRequest();
