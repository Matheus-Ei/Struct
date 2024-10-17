// Libraries
import { ComponentType } from "react";

// Pages
import Home from "../Projects";
import Pages from "../Projects";
import Projects from "../Projects";
import Shared from "../Projects";
import Subscription from "../Projects";
import Settings from "../Projects";
import Profile from "../Projects";

interface Endpoint {
    name: string;
    icon: [string, string];
    component: ComponentType;
}

type EndpointsLogic = Array<Endpoint>;

const endpoints: EndpointsLogic = [
    { name: "Home", icon: ["FaHome", "fa"], component: Home },
    { name: "Pages", icon: ["RiPagesLine", "ri"], component: Pages },
    { name: "Projects", icon: ["GrProjects", "gr"], component: Projects },
    { name: "Shared", icon: ["IoMdShare", "io"], component: Shared },
    { name: "Subscription", icon: ["MdOutlineAttachMoney", "md"], component: Subscription },
    { name: "Settings", icon: ["IoIosSettings", "io"], component: Settings },
    { name: "Profile", icon: ["FaUser", "fa"], component: Profile },
];

export default endpoints;
