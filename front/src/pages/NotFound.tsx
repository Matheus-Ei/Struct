import Icons from "modules/Icons";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <Icons
                name="TbError404"
                library="tb"
                className="text-9xl text-primary"
            />

            <h1 className="text-xl">Page not found</h1>
        </div>
    );
};

export default NotFound;
