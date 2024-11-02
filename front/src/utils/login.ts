import { NavigateFunction } from "react-router-dom";
import Request from "../services/Request";

class Login {
    static async make(
        mail: string,
        password: string,
        navigate: NavigateFunction
    ) {
        const response = await Request.post("user/login", {
            mail,
            password,
        });

        if (response.status === true) {
            navigate("/dashboard");
            return true;
        } else {
            console.error("Login wasn't sucessfull");
            return false;
        }
    }

    static async refresh() {
        const response = await Request.get("token/refresh");

        if (!response) {
            return false;
        }

        return true;
    }

    static async check(navigate: NavigateFunction) {
        const response = await Request.get("token/check");

        if (!response) {
            const isRefreshed = await Login.refresh();

            if (!isRefreshed) {
                navigate("/login");
                return false;
            }

            console.log("Refreshed session");
            return true;
        }

        return true;
    }

    static async logout(navigate: NavigateFunction) {
        await Request.post("user/logout", {});

        navigate("/");
        return true;
    }
}

export default Login;
