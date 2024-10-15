// Modules
import routes from "./routes";

// Libraries
import React from "react";

// Types
interface PageProps {
    selectedName: string;
}
type SingleRouteType = [string, string, string, () => JSX.Element];

const Page = ({ selectedName }: PageProps) => {
    return (
        <div className="dashboard-page-body">
            {routes.map((item: SingleRouteType, index: number) => {
                const page = item[3];
                if (item[0] === selectedName) {
                    return React.createElement(page, { key: index });
                }
            })}
        </div>
    );
};

export default Page;
