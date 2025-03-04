// Libraries
import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

// Local
import Cursor from 'modules/Cursor';
import { NodeElementType } from '../../types';
import useToggle from 'hooks/useToggle';
import Operations from '../utils/Operations';
import { NotesContext } from '../../context';
import useSafeContext from 'hooks/useSafeContext';
import Move from '../utils/Move';
import { ProjectContext } from 'pages/Project/context';

const H1 = ({ id, content, next_id }: NodeElementType) => {
  const { nodes, nodesUpdater, bodyRef } = useSafeContext(NotesContext);
  const { page } = useSafeContext(ProjectContext);
  const [isSelected, toggleSelected] = useToggle(false);

  const pageId = page.data?.id;

  const divRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<number>(0);

  const operations = new Operations(nodes);
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
    if (divRef.current) operations.update(id, divRef.current.innerHTML);
  };

  const handleClick = () => {
    toggleSelected(true);

    setTimeout(() => {
      if (divRef.current) {
        divRef.current.focus();
      }
    }, 0);
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLDivElement>) => {
    const content = nodes.value.find((node) => node.id === id)?.content;

    if (e.key === 'ArrowDown' && e.ctrlKey) {
      e.preventDefault();
      Move.down(next_id, bodyRef, nodes.value);
    } else if (e.key === 'ArrowUp' && e.ctrlKey) {
      e.preventDefault();
      Move.up(id, bodyRef, nodes.value);
    }

    if (e.key === 'Enter' && e.shiftKey) {
      return;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      await operations.add(pageId, id);
      nodesUpdater();
      Move.down(next_id, bodyRef, nodes.value);
    }

    if (
      e.key === 'Backspace' &&
      (content?.trim() === '' || content?.trim() === '<br>')
    ) {
      e.preventDefault();
      Move.up(id, bodyRef, nodes.value);
      await operations.remove(id);
      nodesUpdater();
    }
  };

  const css = clsx(
    'w-full h-auto px-2 py-0.5 resize-none outline-none cursor-text min-h-[1.8em] flex items-center font-bold text-3xl',
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
