// Libraries
import { ComponentType } from "react";

// Pages
import Home from "../Settings";
import Tools from "../Settings";
import Subscription from "../Settings";
import Settings from "../Settings";
import Profile from "../Settings";

interface Endpoint {
    name: string;
    icon: [string, string];
    component: ComponentType;
}

type EndpointsLogic = Array<Endpoint>;

const endpoints: EndpointsLogic = [
    { name: "Home", icon: ["FaHome", "fa"], component: Home },
    { name: "Tools", icon: ["RiPagesLine", "ri"], component: Tools },
    {
        name: "Subscription",
        icon: ["MdOutlineAttachMoney", "md"],
        component: Subscription,
    },
    { name: "Settings", icon: ["IoIosSettings", "io"], component: Settings },
    { name: "Profile", icon: ["FaUser", "fa"], component: Profile },
];

export default endpoints;
