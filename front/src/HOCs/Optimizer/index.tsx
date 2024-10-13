// Hooks
import React, { ComponentType } from "react";

const Optimizer = (WrappedComponent: ComponentType) => {
    return function WithLoader(props: any) {
        const component: any = <WrappedComponent {...props} />;
        return React.memo(component);
    };
};

export default Optimizer;
