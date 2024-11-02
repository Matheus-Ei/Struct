import { useEffect, useState } from "react";
import Request from "services/Request";

type RequestState<T> = {
    response: T | null;
    loading: boolean;
    error: string | null;
};

type UseRequestResult<T> = RequestState<T> & {
    refetch: () => void;
};

function useRequest<T>(url: string, updater?: any): UseRequestResult<T> {
    const [state, setState] = useState<RequestState<T>>({
        response: null,
        loading: true,
        error: null,
    });
    
    const fetchData = () => {
        setState((prev) => ({ ...prev, loading: true }));

        try {
            Request.get(url).then((response) =>
                setState({ response, loading: false, error: null })
            );
        } catch (error) {
            setState({
                response: null,
                loading: false,
                error: (error as Error).message,
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, [updater]);

    return { ...state, refetch: fetchData };
}

export default useRequest;
