// Components
import Projects from "./Projects";
import Tools from "./Tools";

const router: Array<[string, () => JSX.Element]> = [
    ["Projects", Projects],
    ["Tools", Tools],
];

export default router;
