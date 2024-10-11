import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import checkLogin from "../../utils/checkLogin";
import * as S from "./styles";

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        checkLogin(navigate);
    }, []);

    return <S.Body>DASHBOARD</S.Body>;
};

export default Dashboard;
