import About from "../tabs/About";
import Pages from "../tabs/Pages";
import Settings from "../tabs/Settings";
import Shared from "../tabs/Shared";
import Workflows from "../tabs/Workflows";
import { TabProps } from "./types";

const router: Array<[string, (arg0: TabProps) => JSX.Element | null]> = [
    ["About", About],
    ["Pages", Pages],
    ["Shared", Shared],
    ["Workflows", Workflows],
    ["Settings", Settings],
];

export default router;
