// Libraries
import { NavigateFunction } from "react-router-dom";

// Services
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

    static async check(navigate: NavigateFunction) {
        const response = await Request.get("token/check");

        if (response === false) {
            navigate("/login");
            return true;
        }

        return false;
    }
}

export default Login;
