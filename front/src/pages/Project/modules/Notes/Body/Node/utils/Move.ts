// Library
import { RefObject } from 'react';

// Local
import Cursor from 'modules/Cursor';
import { NodeElementType } from '../../types';
import { idType } from 'types/global';

class Move {
  public static up(
    id: idType,
    bodyRef: RefObject<HTMLDivElement>,
    nodes: NodeElementType[],
  ) {
    const prevIndex = nodes.findIndex((n) => n.next_id === id);
    if (!bodyRef.current || prevIndex < 0) return;

    // Navigate to the previous node
    const node = bodyRef.current.children[prevIndex].children[2] as HTMLElement;
    node.click();

    // Move the cursor to the appropriate position
    const cursorHandler = new Cursor(node);
    cursorHandler.move('end');
  }

  public static down(
    next_id: idType,
    bodyRef: RefObject<HTMLDivElement>,
    nodes: NodeElementType[],
  ) {
    const nextIndex = nodes.findIndex(
      (n) => n.id === next_id && next_id !== null,
    );


    // Click on the next node
    setTimeout(() => {
      if (!bodyRef.current || nextIndex < 0) return;

      const node = bodyRef.current.children[nextIndex]
        .children[2] as HTMLElement;
      node.click();

      // Move the cursor to the appropriate position
      const cursorHandler = new Cursor(node);
      cursorHandler.move('start');
    }, 50);
  }
}

export default Move;
