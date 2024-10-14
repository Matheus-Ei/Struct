// Modules
import * as S from "./styles";

// HOCs
import withLoader from "../../HOCs/withLoader";

const Home = () => {
    return <S.Body>Home</S.Body>;
};

export default withLoader(Home, "small");
