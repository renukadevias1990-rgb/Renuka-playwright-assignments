export class MySQLConnection {
    connect() {
        console.log("Connected to MySQL database successfully");
    }
    disconnect() {
        console.log("Disconnected from MySQL database successfully");
    }
    executeUpdate() {
        console.log("MySQL database update executed successfully");
    }
    executequery() {
        console.log("MySQL database query executed successfully");
    }
}
const db = new MySQLConnection();
db.connect();
db.executeUpdate();
db.executequery();
db.disconnect();
