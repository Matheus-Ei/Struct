// Libraries
import { useQuery } from "react-query";

// Local
import { idType } from "types/global";
import Page from ".";

export const usePage = (id: idType) => {
    return useQuery(["page", id], () => (id ? Page.get(id) : null));
};

export const useAllPages = (projectId?: idType) => {
    return useQuery(["all-pages", projectId], () => Page.getAll(projectId));
};
