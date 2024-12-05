// Libraries
import { useQuery } from "react-query";

// Local
import Page from ".";

export const usePage = (id: number | null) => {
    return useQuery(["page", id], () => (id ? Page.get(id) : null));
};

export const useAllPages = (projectId: number) => {
    return useQuery(["all-pages", projectId], () => Page.getAll(projectId));
};
