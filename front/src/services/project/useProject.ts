import { useQuery } from "react-query";
import Project from "services/project";

export function useProject(id: number) {
    return useQuery(["project", id], () => Project.get(id));
}

export function useAllProjects() {
    return useQuery("all-user-projects", () => Project.getAll());
}

export function useProjectUsers(id: number) {
    return useQuery(["project-users", id], () => Project.getUsers(id));
}
