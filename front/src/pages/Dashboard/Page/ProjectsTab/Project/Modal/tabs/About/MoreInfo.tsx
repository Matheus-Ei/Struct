// Local
import Point from "components/Point";
import { ProjectType } from "services/project/type";

interface MoreInfoProps {
    project: ProjectType | undefined;
}

const MoreInfo = ({ project }: MoreInfoProps) => {
    return (
        <div className="relative flex flex-col items-start justify-center w-full right-4">
            <Point
                text={`Shared with ${project?.number_shared} users`}
                icon={{ name: "FaUsers", library: "fa6" }}
            />

            <Point
                text={`Has ${project?.number_pages} pages`}
                icon={{ name: "GoPaperclip", library: "go" }}
            />
        </div>
    );
};

export default MoreInfo;
