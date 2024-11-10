import { NavigateFunction } from "react-router-dom";
import Request from "../services/Request";

class Login {
    static async make(
        mail: string,
        password: string,
        navigate: NavigateFunction
    ) {
        try {
            await Request.post("user/login", {
                mail,
                password,
            });

            navigate("/dashboard");
            return true;
        } catch {
            return false;
        }
    }

    static async refresh() {
        try {
            await Request.get("token/refresh");

            console.log("Refreshed session");
            return true;
        } catch {
            return false;
        }
    }

    static async check(navigate: NavigateFunction) {
        try {
            await Request.get("token/check");

            const isRefreshed = await Login.refresh();

            if (!isRefreshed) {
                navigate("/login");
                return false;
            }

            return true;
        } catch {
            navigate("/login");
            return false;
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
}

export default Login;
