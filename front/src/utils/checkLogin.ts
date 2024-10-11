import Navigator from "../services/Navigator";
import Request from "../services/Request";

const checkLogin = (navigate: any) => {
    const checkTkUrl = `${process.env.REACT_APP_BACK_URL}/token/check`;

    Request.get(checkTkUrl).then((response) => {
        if (response === false) {
            navigate("/login");
        }
    });
};

export default checkLogin;
