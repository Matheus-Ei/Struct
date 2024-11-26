export interface UserType {
    id: number;
    name: string;
    nickname: string;
    email: string;
    password: string;
    verified: boolean;
    autentication: "Auth" | "Default";
}
