// Local
import { PageType } from "services/page/types";
import { SetStateType } from "types/global";

export interface ReactProjectContext {
    projectId: string | undefined;
    menu: {
        tabs?: PageType[] | null;
        refetch: () => void;
    };
    page: {
        data?: PageType | null
        refetch: () => void;
    };
    selectedPage: {
        id: number | null;
        set: SetStateType<number | null>;
    };
}

