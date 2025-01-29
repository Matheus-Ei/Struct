export interface UserType {
    id: number;
    name: string;
    nickname: string;
    about: string;
    mail: string;
    password: string;
    verified: boolean;
    autentication: "Auth" | "Default";
}
