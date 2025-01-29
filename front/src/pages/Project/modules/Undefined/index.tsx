// Local
import Header from "./Header";
import Modules from "./Modules";

const Undefined = () => {
    return (
        <div className="flex flex-col w-3/4 h-full items-center justify-start gap-y-2">
            <Header />

            <Modules />
        </div>
    );
};

export default Undefined;
