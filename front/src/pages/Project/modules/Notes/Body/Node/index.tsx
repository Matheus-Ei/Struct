// Local
import { useMemo } from "react";
import LateralBar from "./LateralBar";
import typesRouter from "./typesRouter";

interface NodeProps {
    content: string;
    type: string;
    order: number;
}

const Node = ({ content, type, order }: NodeProps) => {
    // Render the element based on the type
    const element = useMemo(() => {
        const node = typesRouter.find((item) => item.type === type);
        if (!node) return null;

        return <node.element content={content} order={order} type={type} />;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, order]);

    return (
        <div className="flex items-center justify-center w-full">
            <LateralBar />

            {element}
        </div>
    );
};

export default Node;
