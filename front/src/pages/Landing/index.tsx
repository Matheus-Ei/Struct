// Modules
import * as S from "./styles";

// HOCs
import withLoader from "../../HOCs/withLoader";

const Landing = () => {
    return (
        <S.Body>
            <h1>LANDING PAGE</h1>
        </S.Body>
    );
};

export default withLoader(Landing, "small");
