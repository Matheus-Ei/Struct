interface SingularProps {
    projectId: number;
    module: string;
}

const Singular = ({ projectId, module }: SingularProps) => {
    switch (module) {
        case "Notes":
            return;

        default:
            return <div>ERROR . . .</div>;
    }
};

export default Singular;
