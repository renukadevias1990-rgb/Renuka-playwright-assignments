export interface DatabaseConnection {
    connect(): void;
    disconnect(): void;
    executeUpdate(): void;
    executequery(): void;
}