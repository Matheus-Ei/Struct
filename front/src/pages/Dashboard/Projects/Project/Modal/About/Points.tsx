import Point from "components/Point";

interface PointsProps {
    type: string;
    modules: Array<string>;
}

const Points = ({ type, modules }: PointsProps) => {
    return (
        <div className="grid grid-cols-2 justify-items-start w-2/4">
            <Point icon="GoProjectRoadmap" library="go" text={type} />
            <Point
                icon="FaProjectDiagram"
                library="fa"
                text={String(modules)}
            />
        </div>
    );
};

export default Points;
