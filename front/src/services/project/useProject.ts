// Libraries
import { useQuery } from "react-query";

// Local
import Project from "services/project";
import { idType } from "types/global";

export function useProject(id: idType) {
    return useQuery(["project", id], () => Project.get(id));
}

export function useAllProjects() {
    return useQuery("all-user-projects", () => Project.getAll());
}
