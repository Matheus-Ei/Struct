// Library
import clsx from 'clsx';
import { createElement, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

// Local
import useToggle from 'hooks/useToggle';
import LateralBar from './LateralBar';
import typesRouter from './typesRouter';
import { idType } from 'types/global';
// import Operations from './utils/Operations';
import { NotesContext } from '../context';
import useSafeContext from 'hooks/useSafeContext';

interface NodeProps {
  id: idType;
  content: string;
  type: string;
  next_id: idType;
}

const Node = ({ id, content, type, next_id }: NodeProps) => {
  const { nodes } = useSafeContext(NotesContext);
  const [dragCss, setDragCss] = useState('');
  const [isHovered, toggleHovered] = useToggle(false);

  // const operations = new Operations(nodes);

  // Render the element based on the type
  const element = useMemo(() => {
    const node = typesRouter.find((item) => item.type === type);
    if (!node) return null;

    return createElement(node.element, {
      id,
      content,
      type,
      next_id,
    });
  }, [id, content, type, next_id]);

  const defaultCss = clsx(
    'relative pl-16 flex items-center justify-center w-full rounded-btn',
    {
      'bg-base-200': isHovered,
    },
  );

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', id ? id.toString() : '0');
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const dragId = Number(event.dataTransfer.getData('text/plain'));

    const oldIndex = nodes.value.findIndex((node) => node.id === dragId);
    const newIndex = nodes.value.findIndex((node) => node.id === id);

    if (oldIndex > newIndex) setDragCss('border-t-2 border-base-300');
    if (oldIndex < newIndex) setDragCss('border-b-2 border-base-300');
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragCss('border-none');
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const dragId = Number(event.dataTransfer.getData('text/plain'));
    const newPrevId = id;

    if (dragId !== newPrevId) {
      // await operations.move(dragId, newPrevId);
      // nodesUpdater()
    }

    setDragCss('border-none');
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
      <LateralBar id={id} isHovered={isHovered} />

      {element}
    </div>
  );
};

export default Node;
