import Navigator from "../services/Navigator";
import Request from "../services/Request";

const checkLogin = () => {
    const checkTkUrl = `${process.env.REACT_APP_BACK_URL}/token/check`;

    Request.get(checkTkUrl).then((response) => {
        console.log("RESPONSE", response)
        if (response === false) {
            Navigator.navigate("/login");
        }
    });
};

export default checkLogin;
