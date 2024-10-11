// Util
import checkLogin from "../../utils/checkLogin";

// Modules
import * as S from "./styles";

// Hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        checkLogin(navigate);
    }, []);

    return <S.Body>DASHBOARD</S.Body>;
};

export default Dashboard;
