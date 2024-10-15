// Components
import Home from "../Home";
import Pages from "../Pages";
import Profile from "../Profile";
import Projects from "../Projects";
import Settings from "../Settings";
import Shared from "../Shared";
import Subscription from "../Subscription";

// Types
export type SingleRouteType = [string, string, string, () => JSX.Element];
export type RoutesType = Array<SingleRouteType>;

const routes: RoutesType = [
    ["Home", "FaHome", "fa", Home],
    ["Pages", "MdOutlineFindInPage", "md", Pages],
    ["Projects", "AiOutlineProject", "ai", Projects],
    ["Shared", "FaUsers", "fa6", Shared],
    ["Subscription", "MdOutlineAttachMoney", "md", Subscription],
    ["Profile", "FaUserAlt", "fa", Profile],
    ["Settings", "IoIosSettings", "io", Settings],
];

export default routes;
