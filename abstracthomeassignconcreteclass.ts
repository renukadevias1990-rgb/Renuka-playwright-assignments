import { DatabaseConnection } from "./abstracthomeassignment";
export class MySQLConnection implements DatabaseConnection {

    connect():void{
        console.log("Connected to MySQL database successfully");
    }

    disconnect():void{
        console.log("Disconnected from MySQL database successfully");
    }
    executeUpdate():void{
        console.log("MySQL database update executed successfully");
    }

    executequery():void{
        console.log("MySQL database query executed successfully");  
    }
}

const db= new MySQLConnection();
db.connect();
db.executeUpdate();
db.executequery();
db.disconnect();    