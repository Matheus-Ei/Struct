// Libraries
import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

// Local
import useSafeContext from 'hooks/useSafeContext';
import { NotesContext } from '../../context';
import Cursor from 'modules/Cursor';
import { NodeElementType } from '../../types';
import Operations from '../utils/Operations';
import useToggle from 'hooks/useToggle';

const H1 = ({ content, order }: NodeElementType) => {
  const { nodes, nodesUpdater, bodyRef } = useSafeContext(NotesContext);
  const [isSelected, toggleSelected] = useToggle(false);

  const operations = new Operations(nodes);

  const divRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<number>(0);

  const cursor = useMemo(() => new Cursor(divRef.current), [divRef]);

  // Sets the cursor position
  // without this, the cursor blinks at the start of the text
  useEffect(() => {
    cursor.position = position;
  }, [position, cursor]);

  // To save in the object the content of the div
  useEffect(() => {
    if (!isSelected) {
      nodesUpdater();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected]);

  const handleChange = () => {
    // Update the cursor last position
    setPosition(cursor.position);

    // Sets the text in the node array to correspond to the text in the div
    if (divRef.current)
      operations.updateContent(order, divRef.current.innerHTML);
  };

  const handleClick = () => {
    toggleSelected(true);

    setTimeout(() => {
      if (divRef.current) {
        divRef.current.focus();
      }
    }, 0);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const content = nodes.value[order].content;

    if (e.key === 'ArrowDown' && e.ctrlKey) {
      e.preventDefault();
      operations.nextNode(order, bodyRef, cursor.position);
    } else if (e.key === 'ArrowUp' && e.ctrlKey) {
      e.preventDefault();
      operations.previousNode(order, bodyRef, cursor.position);
    }

    if (e.key === 'Enter' && e.shiftKey) {
      return;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      operations.add(order);
      operations.nextNode(order, bodyRef);
    }

    if (
      e.key === 'Backspace' &&
      (content.trim() === '' || content.trim() === '<br>')
    ) {
      e.preventDefault();
      operations.remove(order);
      operations.previousNode(order, bodyRef);
    }
  };

  const css = clsx(
    'w-full h-auto px-2 py-0.5 resize-none outline-none cursor-text min-h-[1.8em] flex items-center text-2xl font-bold',
  );
  const innerHTML = { __html: content };

  return (
    <div
      contentEditable={isSelected}
      dangerouslySetInnerHTML={innerHTML}
      ref={divRef}
      className={css}
      onInput={handleChange}
      onClick={handleClick}
      onBlur={() => toggleSelected(false)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default H1;
