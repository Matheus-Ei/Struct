// Hooks
import React, { ComponentType } from "react";

const withPerformance = (WrappedComponent: ComponentType) => {
    return function WithLoader(props: any) {
        const component: any = <WrappedComponent {...props} />;
        return React.memo(component);
    };
};

export default withPerformance;
