export default class Validation {
    static isEmail(email: string): { isValid: boolean; isBlank?: boolean } {
      if (!email || email === "") return { isValid: false, isBlank: true };
      else if (!/\S+@\S+\.\S+/.test(email)) {
        return { isValid: false };
      }
      return { isValid: true };
    }
  }
  