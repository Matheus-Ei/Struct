// Components
import Home from "../pages/Home";
import Pages from "../pages/Pages";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";
import Settings from "../pages/Settings";
import Shared from "../pages/Shared";
import Subscription from "../pages/Subscription";

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
