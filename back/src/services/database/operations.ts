// Libraries
import connection from "./connection.js";

class Operations {
    public async query(statement: string) {
        return await connection.query(statement);
    }
}

export default new Operations();
