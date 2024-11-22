// Library
import { useNavigate } from "react-router-dom";

// Local
import Button from "components/Button";
import Icons from "modules/Icons";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-y-2">
            <Icons
                name="TbUfo"
                library="tb"
                className="text-9xl text-primary"
            />

            <h1 className="text-2xl font-semibold italic mb-10">
                Page not found
            </h1>

            <Button
                text="Home"
                onClick={() => {
                    navigate("/");
                }}
                inverse={true}
            />
        </div>
    );
};

export default NotFound;
