// Modules
import * as S from "./styles";

// HOCs
import withLoader from "../../HOCs/withLoader";

const Shared = () => {
    return <S.Body>Shared</S.Body>;
};

export default withLoader(Shared, "small");
