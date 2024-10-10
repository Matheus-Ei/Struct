import checkLogin from "../../utils/checkLogin";
import * as S from "./styles";

const Dashboard = () => {
    checkLogin();

    return <S.Body>DASHBOARD</S.Body>;
};

export default Dashboard;
