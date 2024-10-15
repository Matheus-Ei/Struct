// Modules
import * as T from "./types";
import routes from "../routes";

// Libraries
import React from "react";

const Page = ({ selectedName }: T.PageProps) => {
    return (
        <div className="dashboard-page-body">
            {routes.map((item: T.SingleRouteType, index: number) => {
                const page = item[3];
                if (item[0] === selectedName) {
                    return React.createElement(page, { key: index });
                }
            })}
        </div>
    );
};

export default Page;
