// Modules
import * as T from "./types";

// Components
import Card from "../../../components/common/Card";
import Header from "./Header";
import Footer from "./Footer";

// Animations
import fade from "../../../animations/fade";

const Project = ({
    id,
    title,
    description,
    type,
    modules,
    setProjects,
}: T.ProjectProps) => {
    return (
        <Card>
            <div>
                <Header title={title} description={description} />

                <Footer
                    type={type}
                    modules={modules}
                    projectId={id}
                    setProjects={setProjects}
                />
            </div>
        </Card>
    );
};

export default fade(Project, "in");
