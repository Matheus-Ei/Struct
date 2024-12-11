// Libraries
import { NavigateFunction } from "react-router-dom";

// Local
import Request from "modules/Request";

class User {
    static async login(
        mail: string,
        password: string,
        autenticator: "Default" | "Auth",
        navigate: NavigateFunction
    ) {
        try {
            await Request.post("user/auth", {
                mail,
                password,
                autenticator,
            });

            navigate("/dashboard");

            return true;
        } catch {
            return false;
        }
    }

    static async refreshAccess() {
        try {
            await Request.get("token/refresh");

            return true;
        } catch {
            return false;
        }
    }

    static async verifyLogin(navigate: NavigateFunction) {
        try {
            await Request.get("token/check");
            return true;
        } catch {
            const isRefreshed = await User.refreshAccess();

            if (!isRefreshed) {
                navigate("/login");
                return false;
            }

            return true;
        }
    }

    static async logout(navigate: NavigateFunction) {
        try {
            await Request.delete("user/auth");

            navigate("/");
            return true;
        } catch {
            return false;
        }
    }

    static async signUp(
        name: string,
        nickname: string,
        mail: string,
        password: string | undefined,
        autenticator: "Default" | "Auth",
        navigate: NavigateFunction
    ) {
        try {
            await Request.post("user", {
                name,
                nickname,
                password,
                mail,
                autenticator,
            });

            navigate("/dashboard");
            return true;
        } catch {
            return false;
        }
    }

    static async checkAvailability(nickname?: string, mail?: string) {
        try {
            if (nickname) {
                const response = await Request.get("user?nickname=" + nickname);
                return response.isAvailable;
            }

            if (mail) {
                const response = await Request.get("user?mail=" + mail);
                return response.isAvailable;
            }

            return false;
        } catch {
            return false;
        }
    }

    static async get() {
        try {
            const response = await Request.get("user");
            return response.data;
        } catch {
            return null;
        }
    }

    static async update(
        name: string | undefined,
        about: string | undefined,
        mail: string | undefined
    ) {
        try {
            await Request.patch("user", { name, about, mail });
            return true;
        } catch {
            return false;
        }
    }
}

export default User;
