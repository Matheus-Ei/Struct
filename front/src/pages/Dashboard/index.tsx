// Util
import Login from "../../utils/login";

// Modules
import * as S from "./styles";

// Hooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Menu from "./components/Menu";
import Page from "./components/Page";

const Dashboard = (): JSX.Element => {
    const [selectedName, setSelected] = useState<string>("Home");
    const navigate = useNavigate();

    useEffect(() => {
        Login.check(navigate);
    }, []);

    return (
        <S.Body>
            <S.Content>
                <Menu selectedName={selectedName} setSelected={setSelected} />
                <Page selectedName={selectedName} />
            </S.Content>
        </S.Body>
    );
};

export default Dashboard;
