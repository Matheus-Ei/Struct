// Modules
import * as S from "./styles";

// HOCs
import withLoader from "../../HOCs/withLoader";

const Settings = () => {
    return <S.Body>Settings</S.Body>;
};

export default withLoader(Settings, "small");

