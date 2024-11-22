import { useQuery } from "react-query";
import Page from ".";

export const usePage = (id: number) => {
    return useQuery(["page", id], () => Page.get(id));
};

export const useAllPages = (
    projectId: number,
    onSuccess?: (response: any) => void
) => {
    return useQuery(["all-pages", projectId], () =>
        Page.getAll(projectId).then(onSuccess)
    );
};
