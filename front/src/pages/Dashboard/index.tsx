// Util
import Login from "../../utils/login";

// Modules
import * as S from "./styles";

// Hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = (): JSX.Element => {
    const navigate = useNavigate();

    useEffect(() => {
        Login.check(navigate);
    }, []);

    return <S.Body>DASHBOARD</S.Body>;
};

export default Dashboard;
