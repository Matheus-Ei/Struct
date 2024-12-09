// Local
import EditableField from "components/EditableField";

const BasicInfo = () => {
    return (
        <div className="flex flex-col w-2/3 gap-y-4">
            <div className="flex items-center w-full h-40 gap-x-4">
                <img
                    src="https://via.placeholder.com/500"
                    className="h-full rounded-full"
                    alt="profile"
                />

                <div className="flex flex-col gap-y-1">
                    <EditableField
                        defaultValue="Name"
                        onUpdate={async () => {}}
                        title={{ isVisible: true, text: "Name" }}
                    />

                    <p className="text-neutral italic">@nickname</p>
                </div>
            </div>

            <EditableField
                defaultValue="About"
                onUpdate={async () => {}}
                title={{ isVisible: true, text: "About me" }}
            />
        </div>
    );
};

export default BasicInfo;
