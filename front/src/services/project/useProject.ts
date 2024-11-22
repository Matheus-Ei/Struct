import { useQuery } from "react-query";
import Project from "services/project";

export function useProject(id: number) {
    return useQuery(["project", id], () => Project.get(id));
}

export function useAllProjects() {
    return useQuery("all-user-projects", () => Project.getAll());
}
