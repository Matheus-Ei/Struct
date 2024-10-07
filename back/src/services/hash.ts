import bcrypt from "bcrypt";

class Hash {
    async make(text: string) {
        const saltRounds = 10;

        try {
            const hash = await bcrypt.hash(text, saltRounds);
            return hash;
        } catch (error) {
            throw new Error("Error generating the text hash: " + error);
        }
    }

    async compare(text: string, hash: string) {
        try {
            const isMatch = await bcrypt.compare(text, hash);
            return isMatch;
        } catch (error) {
            throw error;
        }
    }
}

export default Hash;
