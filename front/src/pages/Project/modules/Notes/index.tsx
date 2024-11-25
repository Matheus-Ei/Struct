// Local
import Header from "./Header";
import Body from "./Body";

const Notes = () => {
    return (
        <div className="w-7/12 h-full py-16">
            <Header
                name={"Not Developed Yet"}
                emoji={null}
                description={"This module is not developed yet."}
            />

            <Body />
        </div>
    );
};

export default Notes;
