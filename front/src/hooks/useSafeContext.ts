import { Context, useContext } from "react";

const useSafeContext = <T>(UnknownContext: Context<T>) => {
    const context = useContext<T>(UnknownContext);

    if (context === undefined) {
        throw new Error(
            `The context\n${UnknownContext}\nis not defined. Make sure to wrap the parent component with the context provider.`
        );
    }

    return context;
};

export default useSafeContext;
