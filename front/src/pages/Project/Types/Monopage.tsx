import Notes from "../Modules/Notes";

interface MonopageProps {
    projectId: number;
    module: string;
}

const Monopage = ({ projectId, module }: MonopageProps) => {
    switch (module) {
        case "Notes":
            return <Notes projectId={projectId} />;

        default:
            return <div>ERROR . . .</div>;
    }
};

export default Monopage;
