// Modules
import * as S from "./styles";

// HOCs
import withLoader from "../../HOCs/withLoader";

// Hooks
import { useState } from "react";

// Components
import Menu from "./components/Menu";
import Page from "./components/Page";

const Dashboard = () => {
    const [selectedName, setSelected] = useState<string>("Projects");

    return (
        <S.Body>
            <S.Content>
                <Menu selectedName={selectedName} setSelected={setSelected} />
                <Page selectedName={selectedName} />
            </S.Content>
        </S.Body>
    );
};

export default withLoader(Dashboard, "large", true);
