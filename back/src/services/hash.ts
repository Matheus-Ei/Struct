// Libraries
import bcrypt from 'bcrypt';

class Hash {
  async make(text: string) {
    const saltRounds = 10;

    try {
      const hash = await bcrypt.hash(text, saltRounds);
      return hash;
    } catch (error) {
      console.error(error);
    }
  }

  async compare(text: string, hash: string) {
    try {
      const isMatch = await bcrypt.compare(text, hash);
      return isMatch;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Hash;
