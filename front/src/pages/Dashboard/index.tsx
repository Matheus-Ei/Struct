// Modules
import * as S from "./styles";

// HOCs
import Loader from "../../HOCs/Loader";

// Hooks
import { useState } from "react";

// Components
import Menu from "./components/Menu";
import Page from "./components/Page";

const Dashboard = (): JSX.Element => {
    const [selectedName, setSelected] = useState<string>("Home");

    return (
        <S.Body>
            <S.Content>
                <Menu selectedName={selectedName} setSelected={setSelected} />
                <Page selectedName={selectedName} />
            </S.Content>
        </S.Body>
    );
};


export default Loader(Dashboard);
