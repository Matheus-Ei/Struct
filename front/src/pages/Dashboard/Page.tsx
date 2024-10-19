// Modules
import React from "react";
import endpoints from "./router";

interface PageProps {
    selected: string;
}

const Page = ({ selected }: PageProps) => {
    return (
        <div className="h-[90vh] w-[80%]">
            {endpoints.map((item, index) => {
                return (
                    item.name === selected &&
                    React.createElement(item.component, { key: index })
                );
            })}
        </div>
    );
};

export default Page;
