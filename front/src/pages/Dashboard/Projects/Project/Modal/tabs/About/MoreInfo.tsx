// Local
import Point from "components/Point";

interface MoreInfoProps {
    project: {
        number_shared: number;
        number_pages: number;
    };
}

const MoreInfo = ({ project }: MoreInfoProps) => {
    return (
        <div className="relative flex flex-col items-start justify-center w-full right-4">
            <Point
                text={`Shared with ${project?.number_shared} users`}
                icon="FaUsers"
                library="fa6"
            />

            <Point
                text={`Has ${project?.number_pages} pages`}
                icon="GoPaperclip"
                library="go"
            />
        </div>
    );
};

export default MoreInfo;
