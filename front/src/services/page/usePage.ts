// Libraries
import { useQuery } from "react-query";

// Local
import { PageType } from "./types";
import Page from ".";

export const usePage = (id: number) => {
    return useQuery(["page", id], () => Page.get(id));
};

export const useAllPages = (
    projectId: number,
    onSuccess?: (response: PageType[] | null) => void
) => {
    return useQuery(["all-pages", projectId], () =>
        Page.getAll(projectId).then(onSuccess)
    );
};
