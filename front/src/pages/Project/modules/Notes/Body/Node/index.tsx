// Library
import useSafeContext from 'hooks/useSafeContext';
import { createElement, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { NotesContext } from '../context';

// Local
import LateralBar from './LateralBar';
import typesRouter from './typesRouter';
import Operations from './utils/Operations';

interface NodeProps {
  content: string;
  type: string;
  order: number;
}

const Node = ({ content, type, order }: NodeProps) => {
  const { nodes, nodesUpdater } = useSafeContext(NotesContext);
  const operations = new Operations(nodes);
  const [dragCss, setDragCss] = useState('');

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

  const defaultCss = 'flex items-center justify-center w-full';

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', order.toString());
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragCss('border-t-2 border-base-300');
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragCss('border-none');
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const oldOrder = Number(event.dataTransfer.getData('text/plain'));
    const newOrder = order;

    if (oldOrder !== newOrder) {
      operations.changePosition(oldOrder, newOrder);
    }

    setDragCss('border-none');
    nodesUpdater();
  };

  return (
    <div
      className={twMerge(defaultCss, dragCss)}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <LateralBar order={order} />

      {element}
    </div>
  );
};

export default Node;
