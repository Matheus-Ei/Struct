// Components
import Card from "components/Card";
import Header from "./Header";

// Modules
import { ProjectProps } from "../types";

const Project = ({ title, description }: ProjectProps) => {
    return (
        <Card>
            <div className="flex flex-col items-center justify-between h-fit w-fit">
                <Header title={title} description={description} />
            </div>
        </Card>
    );
};

export default Project;
