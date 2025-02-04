// Library
import clsx from 'clsx';
import useSafeContext from 'hooks/useSafeContext';
import useToggle from 'hooks/useToggle';
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
  const [isHovered, toggleHovered] = useToggle(false);

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

  const defaultCss = clsx(
    'relative pl-16 flex items-center justify-center w-full rounded-btn',
    {
      'bg-base-200': isHovered,
    },
  );

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', order.toString());
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const oldOrder = Number(event.dataTransfer.getData('text/plain'));
    const newOrder = order;

    if (oldOrder > newOrder) setDragCss('border-t-2 border-base-300');
    if (oldOrder < newOrder) setDragCss('border-b-2 border-base-300');
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
      onMouseEnter={() => toggleHovered(true)}
      onMouseLeave={() => toggleHovered(false)}
      onDrop={handleDrop}
    >
      <LateralBar order={order} isHovered={isHovered} />

      {element}
    </div>
  );
};

export default Node;
