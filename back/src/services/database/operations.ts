// Modules
import connection from "./connection";

class Operations {
    public async query(statement: string) {
        return await connection.query(statement);
    }
}

export default new Operations();
