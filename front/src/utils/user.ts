// Libraries
import { NavigateFunction } from "react-router-dom";

// Local
import Request from "../services/Request";

class User {
    static async login(
        mail: string,
        password: string,
        autenticator: "Default" | "Auth",
        navigate: NavigateFunction
    ) {
        try {
            await Request.post("user/login", {
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

            console.log("Refreshed session");
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
            await Request.post("user/logout", {});

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
            await Request.post("user/register", {
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
}

export default User;
