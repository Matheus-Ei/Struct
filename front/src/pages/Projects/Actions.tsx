import Point from "components/Point";

const handdleCreate = (type: string) => {
    return null;
};

const Actions = () => {
    return (
        <div className="flex flex-col items-center justify-center w-2/4">
            <div className="divider divider-primary">
                <p>Create</p>
            </div>

            <div className="flex flex-row items-center justify-center gap-8">
                <Point
                    text="Singular"
                    icon="CiFileOn"
                    library="ci"
                    onClick={() => handdleCreate("Singular")}
                />
                <Point
                    text="Compost"
                    icon="MdOutlineSpaceDashboard"
                    library="md"
                    onClick={() => handdleCreate("Compost")}
                />
                <Point
                    text="Monopage"
                    icon="SiMonoprix"
                    library="si"
                    onClick={() => handdleCreate("Monopage")}
                />
            </div>
        </div>
    );
};

export default Actions;
