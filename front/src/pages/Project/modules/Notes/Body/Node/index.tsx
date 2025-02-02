// Library
import { createElement, useMemo } from 'react';

// Local
import LateralBar from './LateralBar';
import typesRouter from './typesRouter';

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

    return createElement(node.element, {
      content,
      order,
      type,
    });
  }, [content, type, order]);

  return (
    <div className='flex items-center justify-center w-full'>
      <LateralBar order={order} />

      {element}
    </div>
  );
};

export default Node;
