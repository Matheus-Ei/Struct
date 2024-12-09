// Local
import EditableField from "components/EditableField";
import Logout from "services/user/Logout";

const SideBar = () => {
    return (
        <div className="flex flex-col items-end w-1/3 h-full gap-y-4 mt-10">
            <EditableField
                defaultValue="Mail"
                onUpdate={async () => {}}
                title={{ isVisible: true, text: "Mail" }}
            />

            <Logout />
        </div>
    );
};

export default SideBar;
