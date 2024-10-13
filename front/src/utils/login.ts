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
        const url = `${process.env.REACT_APP_BACK_URL}/user/login`;

        const response = await Request.post(url, {
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
        const checkTkUrl = `${process.env.REACT_APP_BACK_URL}/token/check`;

        const response = await Request.get(checkTkUrl);
        if (response === false) {
            navigate("/login");
            return true;
        }

        return false;
    }
}

export default Login;
