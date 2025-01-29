// Libraries
import { useQuery } from "react-query";

// Local
import ProjectShare from ".";

export function useProjectShare(id?: string) {
    return useQuery(["project-users", id], () => ProjectShare.get(id), {
        enabled: !!id,
    });
}
