// Modules
import * as T from "./types";
import * as S from "./styles";

// Components
import Card from "../../../../components/common/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import fade from "../../../../animations/fade";

const Project = ({ id, title, description, type, modules }: T.ProjectProps) => {
    return (
        <S.Body>
            <Card width={100} height={100}>
                <S.CardBody>
                    <Header title={title} description={description} />

                    <Footer type={type} modules={modules} projectId={id} />
                </S.CardBody>
            </Card>
        </S.Body>
    );
};

export default fade(Project, 'in');
