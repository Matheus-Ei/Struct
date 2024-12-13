// Libraries
import { useRef, useState } from "react";
import { NotesContext } from "./context";
import Node from "./Node";
import { NodeElementType } from "./types";

const Body = () => {
    const bodyRef = useRef<HTMLDivElement>(null);

    const [nodes, setNodes] = useState<Array<NodeElementType>>([
        { content: "Text 1", type: "paragraph", order: 0 },
        { content: "Text 2", type: "paragraph", order: 1 },
        { content: "Text 3", type: "paragraph", order: 2 },
    ]);

    const renderNodes = nodes.map((node, index) => (
        <Node
            key={index}
            content={node.content}
            order={node.order}
            type={node.type}
        />
    ));

    const contextValue = {
        nodes: { value: nodes, set: setNodes },
        bodyRef,
    };

    return (
        <NotesContext.Provider value={contextValue}>
            <div className="flex flex-col gap-1 w-full h-3/4">
                {renderNodes}
            </div>
        </NotesContext.Provider>
    );
};

export default Body;
